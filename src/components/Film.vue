<template>
<div id="film">
    <h3>{{ film[0] }}</h3>
    <p>{{ film[1] }}</p>
</div>
</template>

<script>

import { secret_key } from '../theMovieDb'
import axios from 'axios'

export default {
  name: 'Film',
  data () {
      return {
          film : []
      }
  },
  mounted() {
      this.getFilm()
  },
  methods: {

    getFilm: function() {
      var filmId = this.$route.params.id
      let url = `https://api.themoviedb.org/3/tv/${filmId}?api_key=${secret_key}&language=en-US`
      axios.get(url)
      .then((result) => {
            this.film.push(result.data.name)
            this.film.push(result.data.overview)
      }).catch((err) => {
        console.log(err)
      })    
    }
  }
}
</script>

<style>

</style>
