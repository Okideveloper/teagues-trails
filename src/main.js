import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzlyMo5jrt6ZMx_oJStHMh8G7xktZkmkE'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
