<template>
  <div id="summary" class="purple darken-3">
    <v-container>
      <banner
        title="Text Summarization."
        :img="require('@/assets/img/summary.jpg')"
        :body="desc"
        btn="Blog post further explaning algorithm"
        link="https://towardsdatascience.com/a-quick-introduction-to-text-summarization-in-machine-learning-3d27ccf18a9f#:~:text=Text%20summarization%20refers%20to%20the,natural%20language%20processing%20(NLP)."
        class="pb-4"
      />

      <v-stepper v-model="step" vertical class="dark w-100 py-3 mb-4">
        <v-stepper-step
          :rules="[() => (article ? true : false)]"
          color="purple darken-3"
          :complete="step > 1"
          step="1"
        >
          Article
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card flat class="my-3 mx-2" color="transparent">
            <div v-if="article">
              <v-label># of Sentences</v-label>
              <v-slider
                color="purple darken-3"
                v-model="num_of_sentences"
                :step="parseInt(max_sentences / 10)"
                :max="max_sentences"
                thumb-label="always"
                ticks
                tick-size="5"
              ></v-slider>
            </div>
            <v-textarea
              label="Paste Article Here"
              v-model="article"
              counter
              clearable
              solo
              background-color="purple lighten-4"
              full-width
              shaped
            ></v-textarea>
            <v-btn
              color="purple darken-3"
              class="white--text"
              @click="getSummary"
            >
              Continue
            </v-btn>
          </v-card>
        </v-stepper-content>

        <v-stepper-step color="purple darken-3" :complete="step > 1" step="2">
          Summary
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card flat>
            <v-row align="center" justify="space-between">
              <v-col cols="12" lg="6">
                <v-textarea
                  v-model="summary"
                  label="Auto-Generated Summary"
                  id="summary"
                  counter
                  rows="15"
                  class="font-weight-medium"
                  solo
                  readonly
                  background-color="purple lighten-4"
                ></v-textarea>
              </v-col>
              <v-col class="text-center" cols="12" lg="6" v-if="value != 0">
                <v-row>
                  <v-col cols="6" lg="12">
                    <v-progress-circular
                      :rotate="-90"
                      :size="200"
                      :width="15"
                      :value="value"
                      color="purple darken-3"
                      class="mb-2"
                    >
                      <div class="display-3">{{ value }}%</div>
                      <br /><br />
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="6" lg="12">
                    <div class="pa-4">
                      <v-chip-group column>
                        <v-chip class="purple purple--text text-capitalize lighten-5" v-for="(tag, index) in tags" :key="index">
                          {{ tag.title }}
                          <span class="ml-3 purple--text darken-3 font-weight-bold">{{
                            tag.value
                          }}</span>
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-btn color="purple darken-3" text @click="step = 1"> Retry </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

import SummaryBot from "summary-bot";
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  data: () => ({
    value: 0,
    step: 1,
    article: "",
    max_sentences: 0,
    num_of_sentences: 0,
    tags: [
      { title: "Original Word Count", value: 0 },
      { title: "Summary Word Count", value: 0 },
      { title: "Avg. Weight of sentences", value: 0 },
      { title: "Sentences Removed", value: 0 },
    ],
    summary: "",
    desc: "This is a very basic algorithm. First, we split the article into paragraphs and then into sentences. Afterwards we compare the frequency of each word with every other sentence. Finally we attach a weight to each sentence and return every sentence, in sequential order, above a threshold. Just a proof of concept atm, v2 will introduce more advanced NLP techniques to acheive better results. Please enjoy :)",
  }),
  methods: {
    getSummary() {
      let _summary = SummaryBot(this.article, this.num_of_sentences);
      this.value = _summary.percentReduction;
      this.summary = _summary.text;
      this.tags[0].value = _summary.originalLength;
      this.tags[1].value = _summary.summaryLength;
      this.tags[2].value = parseFloat(
        _summary.bestSentences
          .map((li) => li.score)
          .reduce((sum, val) => sum + val, 0) / this.max_sentences
      ).toFixed(2);
      this.tags[3].value = this.max_sentences - _summary.sentenceCount;
      this.step = 2;
    },
  },
  watch: {
    article: function (val) {
      this.max_sentences = val.match(/\(?[^\.\?\!]+[\.!\?]\)?/g).length;
      this.num_of_sentences = this.max_sentences / 2;
    },
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss">
</style>
