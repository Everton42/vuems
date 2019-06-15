<template lang="html">
  <div id="films"> 
    <h1>Films here!</h1>
  </div>
</template>

<script>
import { secret_key } from '../theMovieDb'
import axios from 'axios'
export default {
  name: 'Films',
  data(){
    films: []
  },
  mounted() {
    this.getFilms()
  }, 
  methods: {

    getFilms: function() {
      
      let url = `https://api.themoviedb.org/3/movie/550?api_key=${secret_key}`
      axios.get(url)
      .then((result) => {
          console.log(result)
      }).catch((err) => {
        console.log(err)
      })    
    }
  }
}
</script>

<style lang="css">
</style>
