import Vue from 'vue'
import Vuex from 'vuex'
import { secret_key } from '../theMovieDb'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  strict: true,
  state: {
    films: [],
    film: []
  },
  getters: {
    filmsCount: state => {
      return state.films.length
    }
  },
  mutations: {
    GET_FILMS(state) {
      state.films = []
      let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${secret_key}&language=en-US&page=1`
      axios.get(url)
        .then((result) => {
          result.data.results.forEach(film => {
            state.films.push(film)
          });
        }).catch((err) => {
          console.log(err)
        })
    },
    GET_FILM: (state, id) => {
      state.film = []
      let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${secret_key}&language=en-US`
      axios.get(url)
        .then((result) => {
          state.film.push(result.data.name)
          state.film.push(result.data.overview)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  actions: {
    getFilms(context) {
      context.commit('GET_FILMS')
    },
    getFilm(context, id) {
      context.commit('GET_FILM', id)
    }
  }
})
