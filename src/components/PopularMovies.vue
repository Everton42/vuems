<template lang="html">
  <v-container fluid grid-list-sm>
    <h2 class="font-weight-light text-uppercase">{{listTitle[0].title}}</h2>
    <v-layout mt-3 row wrap>
      <v-flex xs6 sm3 lg2 xl1 v-for="movie in movies" :key="movie.id" d-flex child-flex>
        <v-hover>
          <v-card flat class="white--text" slot-scope="{ hover }">
            <v-layout column>
              <v-flex xs12
                @click="openDialog(movie.id)">
                <v-img
                  :src="'https://image.tmdb.org/t/p/w500'+ movie.poster_path"
                  :lazy-src="`https://picsum.photos/10/6?image=${movies.length * 5 + 10}`"
                  class="grey lighten-1"
                  width="100%"
                >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3 white--text"
                    style="height: 100%; width: 100%"
                  >
                  {{movie.vote_average}}
                  </div>
                </v-expand-transition>
                </v-img>
              </v-flex>
              <v-flex xs12>
                <v-card-text>
                  <div class="font-weight-light grey--text caption">{{movie.title}}</div>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-layout xs12> 
      <v-flex text-xs-center>
        <v-btn
          depressed 
          :loading="loading"
          :disabled="loading"
          @click="loader = 'loading'"
          class="grey--text"
        >
        Carregar
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-flex>
    </v-layout>
    <modalDetails :dialog="modal" @close-dialog="closeDialog"></modalDetails>
  </v-container>
</template>

<script>
import { secret_key } from "../theMovieDb"
import axios from "axios"
import { mapState, mapActions } from "vuex"

export default {
  name: "popularMovies",
  data: () => ({
    loading: false,
    loader: null,
    page: 1,
    modal: false
  }),
  mounted() {
    this.getPopularMovies(this.page)
  },
  computed: {
    ...mapState(["movies", "listTitle", "movie"])
  },
  methods: {
    ...mapActions(["getPopularMovies", "getMovie"]),
    openDialog(id) {
      this.modal = true
      this.getMovie(id)
    },
    closeDialog() {
      this.modal = false
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.getPopularMovies(this.page++)
      this.loader = null
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>