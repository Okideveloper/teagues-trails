import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import AdjForNoun from '@/views/AdjForNoun'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'rhymesaurus',
      component: Rhymesaurus
    }, // adding a new component AdjFormNoun.vue goes here //
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    }

  ]
})
