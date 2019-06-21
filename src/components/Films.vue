<template lang="html">
  <v-container fill-height fluid >
    <v-layout row wrap justify-space-around>
      <v-flex xs4 align-end flexbox v-for="film in films">
        <v-card >
          <v-img
            center
            :src= "'https://image.tmdb.org/t/p/w500'+ film.poster_path"
            width="50%"
            max-height="auto"
          ></v-img>

          <v-card-title primary-title>
              <h3 class="headline mb-0">{{ film.title }}</h3>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { secret_key } from "../theMovieDb";
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Films",
  mounted() {
    this.getPopularFilms();
  },
  computed: {
    ...mapState(["films"])
  },
  methods: {
    ...mapActions(["getPopularFilms"])
  }
};
</script>

<style lang="css">
</style>
