<template>
  <div class="white">
    <h1 class="subheading grey--text"> Dashboard </h1>
    <PopularMovies/>
  </div>
</template>

<script>
import PopularMovies from '@/components/PopularMovies.vue'

export default {
  name: 'dashboard',
  components: {
    PopularMovies
  }
}
</script>
