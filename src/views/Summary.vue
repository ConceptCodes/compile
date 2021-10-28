<template>
  <div id="summary" class="purple darken-3">
    <v-container>
      <banner
        title="Text Summarization"
        :img="require('@/assets/img/summary.jpg')"
        class="pb-4"
      />

      <v-stepper v-model="step" vertical class="dark w-100 py-3">
        <v-stepper-step :rules="[() => article.length >= 1 ? true: false]" color="purple darken-3" :complete="step > 1" step="1">
          Article
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card flat class="my-3" color="transparent">
            <v-label># of Sentences</v-label>
            <v-slider
              color="purple darken-3"
              v-model="num_of_sentences"
              step="2"
              :max="max_sentences"
              thumb-label="always"
              ticks
              tick-size="5"
            ></v-slider>
            <v-textarea
              label="Paste Article Here"
              v-model="article"
              counter
              clearable
              solo
              background-color="purple lighten-4"
              full-width
              shaped
              @input="getSummary"
            ></v-textarea>
          </v-card>
          <v-btn color="purple darken-3" class="white--text" @click="step = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step color="purple darken-3" :complete="step > 1" step="2">
          Summary
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card flat>
            <v-row align="center" justify="space-between">
              <v-col cols="8">
                <v-textarea
                  v-model="summary"
                  label="Auto-Generated Summary"
                  id="summary"
                  counter
                  rows="15"
                  class="font-weight-medium"
                  solo
                  readonly
                  outlined
                  background-color="purple lighten-4"
                ></v-textarea>
              </v-col>
              <v-col cols="4" v-if="value != 0">
                <v-progress-circular
                  :rotate="-90"
                  :size="200"
                  :width="15"
                  :value="value"
                  color="purple darken-3">
                    <div class="display-1">
                      {{ value }}%
                    </div>
                    <br>
                  <div class="font-weight-bold text-h6">reduced</div>
                </v-progress-circular>
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
import SummaryBot from "summary-bot";
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  data: () => ({
    value: 0,
    step: 1,
    article: null,
    max_sentences: 30,
    num_of_sentences: 4,
    summary: null,
  }),
  methods: {
    getSummary() {
      let _summary = SummaryBot(this.article, this.num_of_sentences);
      this.value = _summary.percentReduction;
      this.summary = _summary.text;
    },
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss">
$progress-circular-underlay-stroke: rgba(0, 0, 0, 0.25);

#summary {
  height: 100%;
}
</style>
