import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const TRAIL_KEY = '200202949-be5202662091a9dc38356c0c802cd058'

export default new Vuex.Store({
  state: {
    searchLocation: {
      name: '',
      lat: null,
      lng: null,
      err: null
    },
    trails: []
  },
  mutations: {
    SET_LOCATION(state, payload) {
      state.searchLocation.err = null
      state.searchLocation.name = payload.locationName
      state.searchLocation.lat = payload.lat
      state.searchLocation.lng = payload.lng
    },
    SET_ERROR(state, payload) {
      state.searchLocation.err = payload
    },
    TRAIL_SUMMARY(state, payload) {
      /*console.log(payload, 'Payload')*/
      state.trails = payload
    }
  },
  actions: {
    getGeoLocation: async ({
      commit,
      dispatch
    }, payload) => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${payload}&key=AIzaSyBJTRHctMSy0O3F-weOZKQ2JtcP648F9pA`;

      try {
        const response = await axios.get(url);
        const data = {
          locationName: response.data.results[0].address_components[0].long_name,
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng
        }
        await commit('SET_LOCATION', data)
        await dispatch('trailSummary', data)
      } catch (err) {
        commit('SET_ERROR', err)

      }
    },
    async trailSummary({
      commit
    }, payload) {
      const trails = [];
      const trailResponse = await axios.get('https://www.hikingproject.com/data/get-trails', {
        params: {
          key: TRAIL_KEY,
          lat: payload.lat,
          lon: payload.lng,
          maxDistance: 300,
          maxResults: 50
        }
      });
      trailResponse.data.trails.map(item => {
        trails.push({
          trailName: item.name,
          trailSummary: item.summary,
          trailLocation: item.location,
          trailLength: item.length,
          trailAscent: item.ascent,
          trailDescent: item.descent,
          trailHigh: item.high,
          trailLow: item.low,
          trailImg: item.imgMedium,
          trailInfo: item.url,
          trailId: item.id,
          location: {
            trailLongitude: item.longitude,
            trailLatitude: item.latitude
          }
        })
      })
      commit('TRAIL_SUMMARY', trails);
    }
  }
})
