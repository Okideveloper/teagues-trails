import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import TrailResults from './views/TrailResults.vue'

/*  testing */
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {  
      path: '/trail-results/:query',
      name: 'TrailResults',
      component: TrailResults,
      props: true
    }
  ]
})
