<template lang="html">
  <div> 
    <h2>Top {{filmsCount}}  Rated Tv Series</h2>
    <ul>
      <li v-for="film in films">
        <router-link :to="{ name : 'film', params: { id: film.id }}">{{ film.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { secret_key } from "../theMovieDb";
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Films",
  mounted() {
    this.getFilms()
  },
  computed: {
    ...mapState(["films"]),
    ...mapGetters(["filmsCount"])
  },
  methods: {
    ...mapActions(['getFilms'])
  }
};
</script>

<style lang="css">
</style>
