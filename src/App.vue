<template>
  <v-app>
    <v-content>
      <div id="nav">
        <router-link to="/">Home</router-link>|
      </div>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
