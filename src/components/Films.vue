<template lang="html">
  <div id="films"> 
    <h2>Top Rated Tv Series</h2>
    <ul>
      <li v-for="film in films">
        <router-link :to="{ name : 'film', params: { id: film.id }}">{{ film.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { secret_key } from '../theMovieDb'
import axios from 'axios'

export default {
  name: 'Films',

  data(){
    return {
      films: []
    }
  },
  mounted() {
    this.getFilms()
  }, 
  methods: {

    getFilms: function() {
      
      let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${secret_key}&language=en-US&page=1`
      axios.get(url)
      .then((result) => {
        // console.log(result.data.results)
        result.data.results.forEach(film => {
          this.films.push(film)
        });
      }).catch((err) => {
        console.log(err)
      })    
    }
  }
}
</script>

<style lang="css">
</style>
