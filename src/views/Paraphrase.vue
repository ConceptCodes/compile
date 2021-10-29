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
        <v-stepper-step
          :rules="[() => (article ? true : false)]"
          color="red accent-3"
          :complete="step > 1"
          step="1"
        >
          Original Article
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card flat class="my-3 mx-2" color="transparent">
            <v-label># of Sentences</v-label>
            <v-slider
              color="red accent-3"
              v-model="strength"
              :step="1"
              :max="5"
              thumb-label="always"
              ticks
              tick-size="4"
            ></v-slider>
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
            <v-card-actions>
              <v-btn
                color="red accent-3"
                class="white--text"
                @click="paraphrase"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
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
                  color="red accent-3"
                >
                  <div class="display-1">{{ value }}%</div>
                  <br /><br />
                </v-progress-circular>
                <div
                  class="
                    font-weight-bold
                    red--text
                    accent-3
                    text-center text-h6
                  "
                >
                  different
                </div>
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
import axios from "axios";
import Banner from "@/components/Banner.vue";

export default {
  name: "Paraphrase",
  data: () => ({
    article: "",
    translations: [],
    content: "",
    desc: "In need of a basic algorithm to help you paraphrase content? Your in luck. First, we split the text into sentences. Aftewards, we translate each sentence between multiple different languages before being translated back to english. Lastly, we join all the sentences back together and evaluate how close it is to the original content.",
    step: 1,
    strength: 3,
    value: 0,
  }),
  methods: {
    paraphrase() {
      // split paragraph into sentences
      let _sentences = this.article.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
      // convert sentences
      _sentences.map(x => {
        axios.post("https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",{ language: "en", strength: this.strength, text: x }, {headers: {
            "content-type": "application/json",
            "x-rapidapi-host":
              "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
            "x-rapidapi-key":
              "04aae48a77msh382646537c084cdp150285jsn75d959ee5ba3",
          }})
          .then((response) => {
            this.translations.push(response.data)
          })
          .catch(function (error) {
            console.error(error);
          });
      });
      // this.value = parseFloat(
      //   this.translations
      //     .map((li) => li.similarity)
      //     .reduce((sum, val) => sum + val, 0) / this.translations.length
      // ).toFixed(2);
      
      // this.content = this.translations.map(x => x.rewrite).join(" ")
      console.log(this.translations)
      this.step = 2;
    },
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss">
</style>
