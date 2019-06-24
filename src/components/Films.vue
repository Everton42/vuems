<template lang="html">
<v-layout xs12 align-center column wrap pa-1>
    <v-card
      color="black"
      dark
      tile
      flat
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="film in films"
          :key="`card-${film.id}`"
        >
          <v-layout xs12>
            <v-flex xs12 sm6 offset-sm3>
              <v-layout align-center column wrap pa-2>
                <v-flex xs12 sm6 offset-sm3>
                  <v-img
                    height="200px"
                    :src= "'https://image.tmdb.org/t/p/w500'+ film.poster_path"
                    width="15em"
                  ></v-img>
                </v-flex>
              <v-flex xs12 sm6 offset-sm3>
                  <v-title align-center>
                      <span class="headline">{{film.title}}</span>
                  </v-title>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 >  
                  
                  <v-card-text>
                    <div>
                      <span>{{film.overview}}</span>
                    </div>

                  </v-card-text>
                </v-flex>
              </v-layout>
                <v-card-actions align-center>
                  <v-btn color="orange">Share</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="orange">Explore</v-btn>
                </v-card-actions>
            </v-flex>
          </v-layout>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-xs-center"
          mandatory
        >
          <v-item
            v-for="n in films.length"
            :key="`btn-${n}`"
          >
        <v-btn
              class="hidden-sm-and-down"
              slot-scope="{ active, toggle }"
              :input-value="active"
              icon
              @click="toggle"
              color="red"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import { secret_key } from "../theMovieDb";
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Films",
  data: () => ({
    onboarding: 0
  }),
  mounted() {
    this.getPopularFilms();
  },
  computed: {
    ...mapState(["films"])
  },
  methods: {
    ...mapActions(["getPopularFilms"]),
    next() {
      this.onboarding =
        this.onboarding + 1 === this.films.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.films.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

<style lang="css">
</style>
