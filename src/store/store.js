import Vue from 'vue'
import Vuex from 'vuex'
import { secret_key } from '../theMovieDb'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({

  state: {  
    movies: [],
    movie: {},
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
  getters: {
    poster: state => {
      if(state.movie.poster_path){
        return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + state.movie.poster_path;
      }
    },
    backdrop: state => {
      if(state.movie.backdrop_path){
        return 'https://image.tmdb.org/t/p/w500' + state.movie.backdrop_path;
      }
    },
  },
  mutations: {
    POPULAR_MOVIES(state, page) {
      state.movies = []
      let urlmovies = `https://api.themoviedb.org/3/movie/popular?api_key=${secret_key}&language=en&page=${page}`
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
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${secret_key}&language=en`
      axios.get(url)
        .then((result) => {
          state.movie = result.data
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  actions: {
    getPopularMovies(context, page) {
      context.commit('POPULAR_MOVIES', page)
    },
    getMovie(context, id) {
      context.commit('MOVIE', id)
    }
  }
})
