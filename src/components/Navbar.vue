<template>
  <nav>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template v-for="item in menuItems">
          <v-list-tile :key="item.name" router :to="{name: item.name, params: { mode: item.param }}">
            <v-list-tile-action>
              <v-icon class="grey--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="font-weight-light subheading">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-layout xs12 row fill-height align-content-center>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="black-ligthen darken"
        dark
        app
        fixed
      >
        <v-flex xs6 sm2>
          <v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="font-weight-light white--text title">{{title}}</span>
          </v-toolbar-title>
        </v-flex>
        <v-flex xs6 md3>
          <v-text-field
            prepend-icon="search"
            single-line
            class="caption font-weight-thin grey--text text-truncate"
            label="Search for movies"
            @input="textValue"
            @keydown.enter="search()"
          ></v-text-field>
        </v-flex>
      </v-toolbar>
    </v-layout>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null,
    title: "Vuems",
    text: ''
  }),
  computed: {
    ...mapState([ "menuItems"])
  },
  methods: {
    search (){
      this.$router.push({name:'moviesList', params: { mode: 'search'}, query: { text: this.text}})
    },
    textValue(value){
      this.text = value
    }
  }
};
</script>
