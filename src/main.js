import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ModalDetails from '@/components/ModalDetails.vue'
import PopularMovies from '@/components/PopularMovies.vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.component('modalDetails', ModalDetails)
Vue.component('popularMovies', PopularMovies)

Vue.filter('formatDate', function(value) {

  if (value) {

    return moment(String(value)).format('LL')

  }

});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
