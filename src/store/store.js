import Vue from 'vue'
import Vuex from 'vuex'
import { secret_key } from '../theMovieDb'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({

  state: {  
    movies: [],
    movie: [],
    series: [],
    serie: [],
    listTitle: [
      {
        title: 'Filmes Populares',
        shortTitle: 'Popular',
      },
      {
        title: 'Filmes mais votados',
        shortTitle: 'Mais Votados',
      },
      {
        title: 'Em Estreia',
        shortTitle: 'Em Estreia',
      },
      {
        title: 'Filmes',
      },
      {
        title: 'Séries',
      },
      {
        title: 'Resultado da Pesquisa',
      }
    ]
  },
  mutations: {
    POPULAR_MOVIES(state) {
      state.movies = []
      let urlmovies = `https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}&language=pt&page=1`
      axios.get(urlmovies)
        .then((result) => {
          result.data.results.forEach(movies => {
            state.movies.push(movies)
          });
        }).catch((err) => {
          console.log(err)
        })
    },
    MOVIE: (state, id) => {
      state.movie = []
      let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${secret_key}&language=en-US`
      axios.get(url)
        .then((result) => {
          state.movie.push(result.data.name)
          state.movie.push(result.data.overview)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  actions: {
    getPopularMovies(context) {
      context.commit('POPULAR_MOVIES')
    },
    getMovie(context, id) {
      context.commit('MOVIE', id)
    },
  }
})
