<template>
  <div id="summary" class="red accent-3">
    <v-container>
      <banner
        title="Article Paraphrasing."
        :img="require('@/assets/img/paraphrase.jpg')"
        :body="desc"
        btn="click me"
        link="google.com"
        class="pb-4"
      />

      <v-stepper v-model="step" vertical class="dark w-100 py-3 mb-4">
        <v-stepper-step :rules="[() => article ? true: false]" color="red accent-3" :complete="step > 1" step="1">
          Original Article
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card flat color="transparent">
            <v-textarea
              label="Paste Text Here"
              v-model="article"
              counter
              clearable
              solo
              background-color="red lighten-4"
              full-width
              shaped
            ></v-textarea>
          </v-card>
          <v-btn color="red accent-3" class="white--text" @click="paraphrase"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-step color="red accent-3" :complete="step > 1" step="2">
          Paraphrased Article
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card flat>
            <v-row align="center" justify="space-between">
              <v-col cols="12" md="8">
                <v-textarea
                  v-model="content"
                  label="Content"
                  counter
                  rows="15"
                  class="font-weight-medium"
                  solo
                  readonly
                  background-color="red lighten-4"
                ></v-textarea>
              </v-col>
              <v-col class="text-center" cols="12" md="4">
                <v-progress-circular
                  :rotate="-90"
                  :size="200"
                  :width="15"
                  :value="value"
                  color="red accent-3">
                    <div class="display-1">
                      {{ value }}%
                    </div>
                    <br><br>
                </v-progress-circular>
                  <div class="font-weight-bold red--text accent-3 text-center text-h6">different</div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn color="red accent-3" text @click="step = 1"> Retry </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import Banner from "@/components/Banner.vue";

export default {
  name: "Paraphrase",
  data: () => ({
    article: '',
    content: '',
    desc: 'In need of a basic algorithm to help you paraphrase content? Your in luck. First, we split the text into sentences. Aftewards, we translate each sentence between multiple different languages before being translated back to english. Lastly, we join all the sentences back together and evaluate how close it is to the original content.',
    step: 1,
    value: 0
  }),
  methods: {
    paraphrase() {
      // split paragraph into sentences
      let sentences = this.article.match(/\(?[^\.\?\!]+[\.!\?]\)?/g)
      // translate content to chinese

      this.step = 2
    }
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss">

</style>
