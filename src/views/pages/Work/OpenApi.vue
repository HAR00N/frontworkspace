<template>
  <v-container fluid class="pb-6 pt-3">
    <v-row class="pb-4">
      <v-col cols="12" md="4">
        <v-card elevation="0">
          <base-material-card color="#6d101e">
            <template v-slot:heading>
              <div class="display-2 font-weight-medium white--text">
                <v-icon size="30" class="mr-2">mdi-virus</v-icon> Covid-19
              </div>
              <div class="subtitle-1 font-weight-light white--text pl-12">
                Data per Day
              </div>
            </template>
            <date-picker
              :minDate="minDate"
              :maxDate="maxDate"
              class="px-4 my-2"
              @dateUpdate="dateUpdate"
            />
            <!-- <v-btn elevation="0" fab x-small @click="getCovidList($event)">
                <v-icon>mdi-magnify</v-icon>
              </v-btn> -->

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">날짜</th>
                    <th class="text-left">확진자(명)</th>
                    <th class="text-left">사망자(명)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ content.date }}</td>
                    <td>{{ content.infected }}</td>
                    <td>{{ content.death }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </base-material-card>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="pb-4 align-center" />
    <v-row>
      <v-col cols="12" md="4">
        <v-card elevation="0">
          <base-material-card icon="mdi-xml" title="Code">
            <v-tabs
              v-model="tabs"
              slider-color="grey lighten-1"
              active-class="black--text"
            >
              <v-tab
                class="mr-2 grey--text"
                :ripple="false"
                v-for="item in tab"
                :key="tab.name"
              >
                <img
                  :src="item.src"
                  :height="item.height"
                  :class="`${item.color} mr-2`"
                />
                {{ item.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tabs">
              <v-tab-item v-for="item in tab" :key="tab.name">
                <v-card flat>
                  <git-hub :href="item.href" :title="item.iconTitle" />
                  <v-card-text class="mt-2 py-1" v-text="item.text" />
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </base-material-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="0">
          <base-material-card
            icon="mdi-cog-outline"
            title="API"
            color="grey darken-1"
          >
            <v-tabs
              v-model="apitabs"
              slider-color="grey lighten-1"
              active-class="black--text"
            >
              <v-tab
                class="mr-2 grey--text"
                :ripple="false"
                v-for="item in apitab"
                :key="apitab.name"
              >
                {{ item.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="apitabs">
              <v-tab-item v-for="item in apitab" :key="tab.name">
                <v-card flat>
                  <v-card-text
                    v-if="item.text"
                    class="mt-2 py-1"
                    v-text="item.text"
                  />
                  <div id="app" v-if="item.code">
                    <v-card elevation="0" color="#313131" class="pa-4 mx-4">
                      <pre class="code-block white--text"> {{ item.code }}</pre>
                    </v-card>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </base-material-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>

<script>
import covidData from "../../dashboard/components/data/CovidData.json";
import DatePicker from "../../dashboard/components/buttons/datePicker.vue";
import GitHub from "../../dashboard/components/buttons/myGithub.vue";

export default {
  components: { DatePicker, GitHub },
  mounted() {
    this.leng = this.items.length - 1;
    this.maxDate = this.items[this.leng].date;
    this.minDate = this.items[0].date;
    this.date = this.maxDate;
  },
  data() {
    return {
      apitab: [
        {
          name: "reference",
          text: "dd",
        },
        {
          name: "data format",
          code: `"{
    "response": {
        "resultMsg": "조회성공",
        "result": [{
            "rate_hospitalizations": "0.44",
            "rate_confirmations": "48.66",
            "cnt_severe_symptoms": "251",
            "cnt_deaths": "43",
            "rate_severe_symptoms": "0.49",
            "cnt_hospitalizations": "229",
            "cnt_confirmations": "25125",
            "mmddhh": "5.20.00시",
            "rate_deaths": "0.08"
        }],
        "resultCnt": "1",
        "resultCode": "1"
    }
}"`,
        },
      ],
      apitabs: null,
      tabs: null,
      tab: [
        {
          name: "Go",
          src: "src/assets/icon/go.svg",
          height: "40",
          color: "color-go",
          text: "Go 입니다",
          iconTitle: "Covid Data Api",
          href: "https://github.com/HAR00N/covidDataApi",
        },
        {
          name: "Kotlin",
          src: "src/assets/icon/kotlin.svg",
          height: "25",
          color: "color-kotlin",
          text: "Kotlin 입니다 안녕",
          iconTitle: "Rest Api Kotlin",
          href: "https://github.com/HAR00N/restApi_Kotlin",
        },
      ],
      content: {
        date: "-",
        infected: "-",
        death: "-",
      },
      date: "",
      leng: null,
      items: covidData,
      minDate: "1999-01-01",
      maxDate: "2099-12-31",
    };
  },
  methods: {
    dateUpdate(_date) {
      let vm = this;
      vm.date = _date;
      console.log("date : ", vm.date);

      let content = vm.items.find((tmp) => tmp.date == this.date);
      console.log(content);
      vm.content = content;
    },
    // getCovidList() {
    //   let vm = this;

    //   let content = vm.items.find((tmp) => tmp.date == this.date);
    //   console.log(content);
    //   vm.content = content;
    // },
  },
};
</script>

<style>
.code-block {
  font-family: Consolas, 'Courier New', monospace;
}
</style>