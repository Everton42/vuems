<template>
  <div class="dashboard">
    <h1 class="subheading grey--text"> Dashboard </h1>
    <Movies/>
  </div>
</template>

<script>
import Movies from '@/components/Movies.vue'

export default {
  name: 'dashboard',
  components: {
    Movies
  }
}
</script>
