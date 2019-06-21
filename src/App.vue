<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-tile :key="item.path" @click="changePage(item.path)">
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
        label="Pesquisar filmes ou séries"
        class="hidden-sm-and-down"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="40px">
          <img src="https://krourke.org/img/md_avatar_stormtrooper.svg" alt="avatar">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "dashboard", text: "Home", path: "home" },
      { icon: "local_movies", text: "Filmes", path: "films" },
      { icon: "live_tv", text: "Séries", path: "series" }
    ]
  }),
  methods: {
    changePage(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>
