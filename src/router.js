import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./components/Films.vue')
    },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import('./components/Film.vue')
    }
  ]
})
