<template>
  <v-container fluid>
    <v-layout xs12 lg12 row wrap justify-center>
      <v-dialog
        v-model="dialog"
        max-width="50em"
        persistent
        :fullscreen="$vuetify.breakpoint.xsOnly"
        dark
      >
        <v-card>
          <v-layout xs12 column wrap>
              <v-img
                :src="backdrop"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
                class="grey lighten-1"
                width="100%"
              >
              <v-layout align-center justify-center column fill-height pa-2>
                <v-flex xs12 align-self-end>
                  <v-btn icon @click="closeDialog">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12  center align-self-center>
                  <h1 class="title font-weight-regular white--text">{{movie.title}}</h1>
                </v-flex>
              </v-layout>
              </v-img>
          </v-layout>
          <!-- <v-layout >
            <v-flex xs12 v-show="$vuetify.breakpoint.smAndUp">
                <v-img 
                :src="poster"
                :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
                class="grey lighten-1"
                height="18em"
                >
                </v-img>
            </v-flex>
          </v-layout> -->
          <v-layout xs12 column wrap pa-3>
            <v-flex xs12 mt-2 mb-2>
              <div class="font-weight-thin white--text" >{{movie.overview}}</div>
            </v-flex>
            <v-flex xs12 mt-2 mb-2>
              <h3 class="font-weight-regular text-uppercase">Genres</h3>
              <div
                class="font-weight-thin"
                v-for="genre in movie.genres"
                :key="genre.id"
              >{{genre.name}}</div>
            </v-flex>
            <v-flex xs12 mt-2 mb-2>
              <h3 class="font-weight-regular text-uppercase">Release Date</h3>
              <div class="font-weight-thin">{{movie.release_date}}</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "modalDetails",
  props: {
    dialog: Boolean
  },
  computed: {
    ...mapState(["movie"]),
    ...mapGetters(["backdrop", "poster"])
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    }
  }
};
</script>