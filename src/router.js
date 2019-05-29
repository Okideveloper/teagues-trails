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
          path: '/:trailId/current',
          name: 'TrailResults',
          component: TrailResults
        },
      ]
      })
