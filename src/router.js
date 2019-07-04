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
      component: Dashboard,
      props: false
    },
    {
      path: '/moviesList/:mode',
      name: 'moviesList',
      props: true,
      component: () => import('./components/MoviesList.vue')
    },
  ]
})
