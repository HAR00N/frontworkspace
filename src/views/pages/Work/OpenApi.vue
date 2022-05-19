<template>
  <v-container fluid class="pb-6 pt-3">
    <v-row>
      <v-col cols="12" md="2">
        <!-- <div v-for="item in items" :key="items.date">
        {{ item.date }}
      </div> -->
        <!-- <date-picker
            :maxDate="items[leng].date ? items[leng].date :maxDate"
            :minDate="items[0].date ? items[0].date :minDate"
            class="px-4"
            @dateUpdate="dateUpdate"
          /> -->
        <date-picker
          :minDate="minDate"
          :maxDate="maxDate"
          class="px-4"
          @dateUpdate="dateUpdate"
        />
      </v-col>
      <v-col cols="12" md="1">
        <v-btn elevation="0" fab x-small @click="getCovidList($event)">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card elevation="1" rounded="lg">
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
        </v-card>
      </v-col>
      <!-- <v-col>
        <v-card>
          <span>
            {{ content.date }} 일의 코로나 확진자 수는
            {{ content.infected }}명이고, 사망자 수는 {{ content.death }}명
            입니다
          </span>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import covidData from "../../dashboard/components/data/CovidData.json";
import DatePicker from "../../dashboard/components/buttons/datePicker.vue";

export default {
  components: { DatePicker },
  mounted() {
    this.leng = this.items.length - 1;
    this.maxDate = this.items[this.leng].date;
    this.minDate = this.items[0].date;
    this.date = this.maxDate;
  },
  data() {
    return {
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
      this.date = _date;
      console.log("date : ", this.date);
    },
    getCovidList() {
      let vm = this;

      let content = vm.items.find((tmp) => tmp.date == this.date);
      console.log(content);
      vm.content = content;
    },
  },
};
</script>

<style>
</style>