<template>
  <div>
    <v-card class="card-shadow border-radius-xl">
      <div class="card-header-padding" style="padding: 0.25rem 0.5rem">
        <div class="d-flex align-center">
          <v-col align="left" cols="6">
            <h5 class="font-weight-bold text-h5 text-typo mb-0">
              {{ titleSearch }}
            </h5>
            <p class="text-sm text-body mb-0">
              {{ contentsSearch }}
            </p>
          </v-col>
          <v-col align="right" cols="6">
            <v-btn color="transparent" elevation="2" small @click="getDetail"
              >상세검색</v-btn
            >
          </v-col>
        </div>
      </div>

      <div class="card-header-padding" style="padding: 0.2rem 0.2rem">
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
                    <v-btn icon> <v-icon>fa fa-search</v-icon></v-btn>
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
                sm="3"
                v-for="label in labels"
                :key="label.uid"
              >
                <v-select
                  dense
                  solo
                  :label="label.name"
                  :items="label.contents"
                >
                </v-select>           
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </div>
      <v-card-actions class="card-padding"> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "basicsearch",
  props: {
    titleSearch: String,
    contentsSearch: String,
  },
  data() {
    return {
      items: [],
      labels: [],
      isDetail: false,
      search: "",
      selected: "",
    };
  },
  mounted() {
    let vm = this;
    vm.getList();
  },
  methods: {
    toggleMarker() {
      this.search = !this.search;
    },
    getDetail() {
      this.isDetail = !this.isDetail;
    },
    async getList() {
      console.log("titleSearch : ", this.titleSearch, "\ncontentsSearch : ", this.contentsSearch);
      let param = { paramText: JSON.stringify({ data: "" }) };

      let _list = await this.$store.dispatch(
        "FETCH_LIST",
        "/api/acm/search/elements",
        param
      );
      let _label = await this.$store.dispatch(
        "FETCH_LIST",
        "/api/acm/search/main",
        param
      );

      this.items = _list.data.list.list;
      this.labels = _label.data.list.list;

      var idx = 0;
      var arr = [];

      for (var i = 0; i < this.items.length; i++) {
        if (i == this.items.length - 1) {
          arr.push(this.items[i].name);
          this.labels[idx].contents = arr;
        } else if (this.labels[idx].code == this.items[i].upcode) {
          arr.push(this.items[i].name);
        } else {
          this.labels[idx].contents = arr;
          idx++;
          arr = [];
          arr.push(this.items[i].name);
        }
      }
      console.log("labels : ", this.labels);
    },
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
