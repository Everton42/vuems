<template>
  <div class="dashboard">
    <h1 class="subheading grey--text"> Dashboard </h1>
  <v-container fluid>
    <Films/>
  </v-container>
  </div>
</template>

<script>
import Films from '@/components/Films.vue'

export default {
  name: 'dashboard',
  components: {
    Films
  }
}
</script>
