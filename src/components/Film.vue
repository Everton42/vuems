<template>
  <div id="film">
    <h3>{{ film[0] }}</h3>
    <p>{{ film[1] }}</p>
  </div>
</template>

<script>
import { secret_key } from "../theMovieDb";
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  name: "Film",
  mounted () {
    this.getFilm(this.filmId)
  },
  data() {
    return {
      filmId: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["film"]),
  },
  methods: {
    ...mapActions(["getFilm"])
  }
};
</script>

<style>
</style>
