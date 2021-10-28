<template>
  <div id="summary" class="deep-purple">
    <v-container fill-height>
      <banner
        title="Text Summarization"
        :img="require('@/assets/img/summary.jpg')"
      />
      <v-row class="py-2">
        <v-col>
          <v-label># of Sentences</v-label>
          <v-slider color="deep-purple lighten-4" v-model="num_of_sentences" step="2" thumb-label ticks></v-slider>
          <v-textarea
            label="Paste Article Here"
            v-model="article"
            counter
            solo
            full-width
            @input="getSummary"
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
            v-if="value != 0"
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
import SummaryBot from "summary-bot";
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  data: () => ({
    value: 0,
    article: null,
    num_of_sentences: 4,
    summary: null,
  }),
  methods: {
    getSummary() {
      let _summary = SummaryBot(this.article, this.num_of_sentences)
      this.value = _summary.percentReduction
      this.summary = _summary.text
    },
  },
  components: {
    Banner,
  },
};
</script>
