<template>
  <v-app>
    <v-toolbar id="navbar" dark flat>
      <v-toolbar-title  class="font-weight-bold">
        <a class="white--text" href="/">Compile;</a>
        <span>
          <v-chip class="ma-2 text-capitalize" x-small>beta</v-chip>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="/paraphrase"> Paraphrase </v-btn>
      <!--  <v-btn text href="/qa">
        Question & Answering
      </v-btn> -->
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted(){
    // let colors = {
    //   'Summary' : 'purple darken-3',
    //   'Paraphrase': 'red accent-3'
    // }
    // this.toolbar_color = colors[this.$router.currentRoute.name]
    // console.log(this.$router.currentRoute)
  },
  data: () => ({
    // toolbar_color: ''
  })
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
#navbar {
  z-index: 2;
}
</style>