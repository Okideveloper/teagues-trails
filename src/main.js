// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store'

Vue.config.productionTip = false

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














/* eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
