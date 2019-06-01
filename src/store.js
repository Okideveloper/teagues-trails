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
        state.trails = payload
      }
    },
    actions: {
      getGeoLocation({
        commit,
        dispatch
      }, payload) {
        const url = `https://maps.googleapis.com/maps/api/geocode/js?address=${payload}&key=${AIzaSyDzlyMo5jrt6ZMx_oJStHMh8G7xktZkmkE}`
        

        axios
          .get(url)
          .then(res => {
            const data = {
              locationName: res.data.results[0].address_components[0].long_name,
              lat: res.data.results[0].geometry.location.lat,
              lng: res.data.results[0].geometry.location.lng
            }
            commit('SET_LOCATION', data)
            return data
          })
          .then(data => {
            dispatch('TrailSummary', data)
          })
          .catch(err => {
            commit('SET_ERROR', err)
          })
      },
      trailSummary({
        commit
      }, payload) {
        axios
          .get('https://www.hikingproject.com/data/get-trails', {
            params: {
              key: TRAIL_KEY,
              lat: payload.lat,
              lon: payload.lng,
              maxDistance: 10,
              maxResults: 50
            }
          })
          .then(res => {
            const trails = []
            res.data.trails.map(item => {
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
              return trails
            })
            commit('TRAIL_SUMMARY', trails)
          })
      }
    }
  }
})
