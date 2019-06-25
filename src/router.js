import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('./components/Movies.vue')
    },
    // {
    //   path: '/movie/:id',
    //   name: 'movie',
    //   component: () => import('./components/Movie.vue')
    // }
  ]
})
