import Vue from 'vue'
import Vuex from 'vuex'
import { secret_key } from '../theMovieDb'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({

  state: {  
    films: [],
    film: [],

  },
  mutations: {
    GET_POPULAR_FILMS(state) {
      state.films = []
      let urlFilms = `https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}&language=pt&page=1`
      axios.get(urlFilms)
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
    getPopularFilms(context) {
      context.commit('GET_POPULAR_FILMS')
    },
    getFilm(context, id) {
      context.commit('GET_FILM', id)
    },
  }
})
