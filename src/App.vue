<template>
  <v-app>
    <v-toolbar color="transparent" flat>
      <v-toolbar-title class="font-weight-bold" >Compile;</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text href="/paraphase">
        Paraphrase
      </v-btn>
      <v-btn text href="/qa">
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
};
</script>

<style lang="scss">

</style>