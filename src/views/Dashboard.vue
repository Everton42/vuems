<template>
  <v-container fluid>
    <div class="white">
      <h2 class="font-weight-light text-uppercase">{{listTitle[0].title}}</h2>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapState(["listTitle"])
  }
};
</script>
