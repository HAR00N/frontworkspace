<template>
  <div>
    <v-card rounded="lg" elevation="0">
      <div class="card-header-padding" style="padding: 0.25rem 0.5rem">
        <div class="d-flex align-center">
          <v-col align="left" cols="6">
            <h5 class="font-weight-bold text-h5 text-typo mb-0">{{title}}</h5>
            <p class="text-sm text-body mb-0">{{contents}}</p>
          </v-col>
          <v-col align="right" cols="6">
            <v-btn
              color="primary"
              elevation="1"
              small
              @click="getDetail"
              class=""
              >상세검색</v-btn
            >
          </v-col>
        </div>
      </div>

      <div class="" style="padding: 0.2rem 0.2rem">
        <v-card-text class="px-12 py-0">
          <v-row align="center">
            <v-col cols="12">
              <div class="d-flex">
                <v-text-field
                  clearable
                  label="* 검색어를 입력하세요"
                  type="text"
                >
                  <template slot="append">
                    <v-btn color="primary" fab small elevation="1" class="mb-1">
                      <v-icon>mdi-magnify</v-icon></v-btn
                    >
                  </template>
                </v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" v-if="isDetail">
            <template>
              <v-col
                class="d-flex"
                cols="12"
                sm="2"
                v-for="label in labels"
                :key="label.name"
              >
                <v-select
                  dense
                  :label="label.name"
                  :items="label.contents"
                  flat
                  v-model="selected"
                  @change="searchUpdate($event)"
                >
                </v-select>
              </v-col>
              <!-- selected : {{selected}} -->
            </template>
          </v-row>
          
        </v-card-text>
      </div>
      <!-- <v-card-actions class="card-padding"> </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "detailsearch",
  value: "",
  Dessert: "",
  Calories: "",
  Fat: "",
  Carbs: "",
  Protein: "",
  props: ["title", "contents"],
  data() {
    return {
      items: "",
      label: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.2,
          carbs: 94,
          protein: 0.1,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0.1,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ],
      labels: [
        {
          name: "Dessert",
          contents: [
            "Frozen Yogurt",
            "Ice cream Sandwich",
            "Eclair",
            "Cupcake",
            "Gingerbread",
            "Jelly bean",
            "Lollipop",
            "Honeycomb",
            "Donut",
            "KitKat",
          ],
          value: "",
        },
        {
          name: "Calories",
          contents: [518, 452, 408, 392, 375, 356, 305, 262, 237, 159],
          value: "",
        },
        {
          name: "Fat",
          contents: [26, 25, 3.2, 0.3, 0.2, 16, 3.7, 16, 9, 6],
          value: "",
        },
        {
          name: "Carbs",
          contents: [65, 51, 87, 98, 94, 49, 67, 23, 37, 24],
          value: "",
        },
        {
          name: "Protein",
          contents: [7, 4.9, 6.5, 0.1, 3.9, 4.3, 6, 4.3, 4],
          value: "",
        },
      ],
      isDetail: false,
      search: "",
      selected: "",
    };
  },
  mounted() {
    // let vm = this;
    // vm.getList();
  },
  methods: {
    searchUpdate(e) {
      let vm = this;
      vm.selected = e;

      vm.$emit("searchDetail", e);
    },
    toggleMarker() {
      this.search = !this.search;
    },
    getDetail() {
      this.isDetail = !this.isDetail;
    },
    // async getList() {
    //   console.log("titleSearch : ", this.titleSearch, "\ncontentsSearch : ", this.contentsSearch);
    //   let param = { paramText: JSON.stringify({ data: "" }) };

    //   let _list = await this.$store.dispatch(
    //     "FETCH_LIST",
    //     "/api/acm/search/elements",
    //     param
    //   );
    //   let _label = await this.$store.dispatch(
    //     "FETCH_LIST",
    //     "/api/acm/search/main",
    //     param
    //   );

    //   this.items = _list.data.list.list;
    //   this.labels = _label.data.list.list;

    //   var idx = 0;
    //   var arr = [];

    //   for (var i = 0; i < this.items.length; i++) {
    //     if (i == this.items.length - 1) {
    //       arr.push(this.items[i].name);
    //       this.labels[idx].contents = arr;
    //     } else if (this.labels[idx].code == this.items[i].upcode) {
    //       arr.push(this.items[i].name);
    //     } else {
    //       this.labels[idx].contents = arr;
    //       idx++;
    //       arr = [];
    //       arr.push(this.items[i].name);
    //     }
    //   }
    //   console.log("labels : ", this.labels);
    // },
  },
  watch: {},

  computed: {},
};
</script>

<style lang="scss">
.v-input__append-inner .v-input__icon .v-input__icon--append {
  width: 50px;
  height: 50px;
}
</style>
