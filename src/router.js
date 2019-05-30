import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import TrailResults from '@/views/TrailResults'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/google-map/:query',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/search-form/:query',
      name: 'SearchForm',
      component: SearchForm
    },
    {
      path: '/trail-summary/:query',
      name: 'TrailSummary',
      component: TrailSummary
    }
  ]
})
