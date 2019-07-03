<template>
  <v-container fluid pa-0>
      <v-layout xs12>
        <v-flex xs12>
          <v-img
                :src="images.dashboard"
                :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
                contain
                width="100%"
              >
              </v-img>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapState(["modes"])
  },
  data() {
    return {
        images: {
            dashboard: require('../assets/Vuems.png')
        }
    }
  }
};
</script>
