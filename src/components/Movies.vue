<template lang="html">
  <v-container  fluid grid-list-sm>
    <v-layout flat row wrap>
      <v-flex xs6 sm6 offset-sm3 v-for="film in movies" d-flex child-flex>
        <v-card flat class="white--text">
          <v-layout column xs6 fill-height>
            <v-flex xs12>
              <v-img
                :src="'https://image.tmdb.org/t/p/w500'+ film.poster_path"
                width="100%" height="15em"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                class="grey lighten-1"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { secret_key } from "../theMovieDb";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "movies",
  data: () => ({
    onboarding: 0
  }),
  mounted() {
    this.getPopularMovies();
  },
  computed: {
    ...mapState(["movies","listTitle"])
  },
  methods: {
    ...mapActions(["getPopularMovies"]),
    next() {
      this.onboarding =
        this.onboarding + 1 === this.films.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.films.length - 1 : this.onboarding - 1;
    }
  }
};
</script>