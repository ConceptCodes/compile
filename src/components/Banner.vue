<template>
  <v-card flat color="transparent">
    <v-row class="py-3">
      <v-col class="content mt-5">
        <v-card-title
          class="display-2 font-weight-bold mb-3 text-capitalize"
          v-text="title"
        ></v-card-title>
        <v-card-subtitle class="mb-4" v-text="body"></v-card-subtitle>
        <v-btn v-if="btn" class="btn" :href="link" elevation="2" large outlined rounded>{{ btn }}</v-btn>
      </v-col>
      <v-col class="d-none d-lg-block">
        <v-img
          :src="img"
          width="500"
          height="500"
          lazy-src="https://via.placeholder.com/500"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "banner",
  props: {
    title: {
      type: String,
      default: "This is a title",
    },
    link: {
      type: String
    },
    btn: {
      type: String
    },
    body: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad molestiae quae quia eos quam distinctio adipisci nostrum quaerat eius et. Maiores error aliquam vitae, dicta et assumenda animi voluptas ab.",
    },
    img: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  z-index: 1;
  position: relative;
  top: 50%;
}
.btn {
  background-color: white;
  border: 3px solid black;
}
</style>