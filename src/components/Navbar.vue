<template>
  <nav>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template  v-for="item in menusItems">
          <v-list-tile  :key="item.path" router :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black-ligthen darken"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 15em" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Filmes e Séries</span>
      </v-toolbar-title>

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Pesquisar filmes e séries"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar size="40px">
          <img src="https://krourke.org/img/md_avatar_stormtrooper.svg" alt="avatar">
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
    data: () => ({
    drawer: null,
    computed: {
    ...mapState(["movies","listTitle"])
    },
    menusItems: [
      { icon: "dashboard", text: "Dashboard", path: "/" },
      { icon: "local_movies", text: "Filmes Populares", path: "populares" },
      { icon: "local_movies", text: "Filmes Mais Votados", path: "maisVotados" },
      { icon: "local_movies", text: "Em Estreia", path: "emEstreia" },
      { icon: "local_movies", text: "Filmes", path: "filmes" },
      { icon: "local_movies", text: "Filmes", path: "series" }
    ]
  })
}
</script>
