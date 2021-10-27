<template>
  <v-app>
    <v-app-bar absolute color="transparent" flat>
      <v-toolbar-title>Compile</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="/paraphrase">Paraphrase</a>
      <a href="/qa">Question & Answering</a>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
