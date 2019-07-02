<template>
  <v-container fluid>
    <div class="white">
      <!-- <moviesList :mode='modes[0].type'></moviesList>
      <moviesList :mode='modes[1].type'></moviesList> -->
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapState(["modes"])
  }
};
</script>
