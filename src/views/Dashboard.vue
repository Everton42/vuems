<template>
  <div class="white">
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
