<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290" persistent fullscreen dark>
      <v-card>
        <v-layout xs12 row wrap>
          <v-flex xs10>
            <v-card-title class="headline">{{movie[0]}}</v-card-title>
          </v-flex>
          <v-flex xs2>
            <v-card-actions>
              <v-btn icon @click="closeDialog">
                <v-icon>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-flex>
          <v-flex xs12>
            <v-card-text>{{movie[1]}}</v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "modalDetails",
  props: {
    dialog: Boolean
  },
  mounted () {
      console.log(this.movie)
  },
  computed: {
    ...mapState(["movie"])
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    }
  }
};
</script>