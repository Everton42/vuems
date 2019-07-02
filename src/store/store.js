import Vue from 'vue'
import Vuex from 'vuex'
import { secret_key } from '../theMovieDb'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({

  state: {
    topRatedMovies: [],
    popularMovies: [],
    upComingMovies: [],
    movie: {},
    serchResults: {},
    modes: [
      {
        type: 'popular',
        title: 'Popular Movies',
        shortTitle: 'Popular',
      },
      {
        type: 'topRated',
        title: 'Top Rated Movie',
        shortTitle: 'Top Rated',
      },
      {
        type: 'upComing',
        title: 'Upcoming Movies',
        shortTitle: 'Upcoming',
      },
      {
        title: 'Search Results',
      }
    ],
    menuItems: [
      {
        icon: 'dashboard',
        title: 'Dashboard',
        shortTitle: 'Dashboard',
        path: '/',
        param: ''
      },
      {
        icon: 'local_movies',
        title: 'Popular Movies',
        shortTitle: 'Popular',
        path: 'moviesList/popular',
      },
      {
        icon: 'local_movies',
        title: 'Top Rated Movies',
        shortTitle: 'Top Rated',
        path: 'moviesList/topRated',
      },
      {
        icon: 'local_movies',
        title: 'Upcoming Movies',
        shortTitle: 'Upcoming',
        path: 'moviesList/upComing',
      }
    ],
    URL_BASE: 'https://api.themoviedb.org/3/movie/',
    PARAMS_BASE: 'api_key='+secret_key+'&language=en-US'
  },
  getters: {
    poster: (state) => (path) => {
      if (path) {
        return 'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + path;
      }
    },
    backdrop: state => {
      if (state.movie.backdrop_path) {
        return 'https://image.tmdb.org/t/p/w780' + state.movie.backdrop_path;
      }
    },
    popularMovies: (state) => {
      return state.popularMovies
    },
    topRatedMovies: (state) => {
      return state.topRatedMovies
    }
  },
  mutations: {
    POPULAR_MOVIES(state, page) {
      if (page === 1) {
        state.popularMovies = []
      }
      let urlmovies = `${state.URL_BASE}popular?${state.PARAMS_BASE}&page=${page}`
      axios.get(urlmovies)
        .then((result) => {
          result.data.results.forEach(movies => {
            state.popularMovies.push(movies)
          });
        }).catch((err) => {
          console.log(err)
        })
    },
    TOP_RATED_MOVIES(state, page) {
      if (page === 1) {
        state.topRatedMovies = []
      }
      let urlmovies = `${state.URL_BASE}top_rated?${state.PARAMS_BASE}&page=${page}`
      axios.get(urlmovies)
        .then((result) => {
          result.data.results.forEach(movies => {
            state.topRatedMovies.push(movies)
          });
        }).catch((err) => {
          console.log(err)
        })
    },
    UPCOMING_MOVIES(state, page) {
      if (page === 1) {
        state.movies = []
      }
      let urlmovies = `${state.URL_BASE}upcoming?${state.PARAMS_BASE}&page=${page}`
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
      let url = `${state.URL_BASE}${id}?${state.PARAMS_BASE}`
      axios.get(url)
        .then((result) => {
          state.movie = result.data
        }).catch((err) => {
          console.log(err)
        })
    },
    SEARCH: (state, query) => {
      let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${secret_key}&language=en-US&${query}=func&page=1&include_adult=false`
      axios.get(searchUrl)
        .then((result) => {
          state.serchResults = result.data
        }).catch((err) => {
          console.log(err)
        })
    }

  },
  actions: {
    getPopularMovies(context, page) {
      context.commit('POPULAR_MOVIES', page)
    },
    getTopRatedMovies(context, page) {
      context.commit('TOP_RATED_MOVIES', page)
    },
    getUpComingMovies(context, page) {
      context.commit('UPCOMING_MOVIES', page)
    },
    getMovie(context, id) {
      context.commit('MOVIE', id)
    },
    search(context, query) {
      context.commit('SEARCH', query)
    }
  }
})
