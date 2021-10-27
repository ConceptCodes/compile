<template>
  <v-card>
    <div class="content">
      <v-card-title v-text="title"></v-card-title>
      <v-card-subtitle v-text="body"></v-card-subtitle>
    </div>
    <v-img class="d-none d-lg-block" :src="img" lazy-src="https://via.placeholder.com/500"></v-img>
  </v-card>
</template>

<script>
export default {
    name: 'banner',
    props: {
        title: {
            type: String,
            default: 'This is a title'
        },
        body: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad molestiae quae quia eos quam distinctio adipisci nostrum quaerat eius et. Maiores error aliquam vitae, dicta et assumenda animi voluptas ab.'
        },
        img: {
            type: String
        }
    }
}
</script>

<style>

</style>