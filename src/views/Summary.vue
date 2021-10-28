<template>
  <div id="summary" class="deep-purple">
    <v-container fill-height>
      <banner
        title="Text Summarization"
        :img="require('@/assets/img/summary.jpg')"
      />
      <v-row>
        <v-col>
          <v-text-field v-model="title" label="Article Title" single-line solo></v-text-field>
          <v-textarea
            label="Paste Article Here"
            v-model="article"
            counter
            solo
            full-width
            single-line
          ></v-textarea>
        </v-col>
        <v-col fill-height>
          <v-textarea
            v-model="summary"
            label="Summary"
            counter
            solo
            full-width
            readonly
            single-line
            background-color="deep-purple lighten-3"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="15"
            :value="value"
            color="deep-purple lighten-3"
          >
            {{ value }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  data: ()=> ({
    value: 50,
    title: null,
    article: null,
    summary: null
  }),
  components: {
    Banner,
  },
};
</script>
