<template>
  <div>
    <v-container fluid class="px-6 py-0">
      <v-row class="mt-1">
        <v-col cols="12" class="pb-0">
          <!-- <datatable-search @searchDetail="changeSearch">
          </datatable-search> -->
          <datatable-search @searchDetail="changeSearch" :title="`검색 페이지`" :contents="`동적 상세 검색 컴포넌트`">
          </datatable-search>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="12" class="pt-0">
          <!-- <datatable-simple :search="search"> </datatable-simple> -->
          <datatable-simple :search="search"> </datatable-simple>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DatatableSearch from "../../dashboard/components/tables/DetailSearch.vue";
import DatatableSimple from "../../dashboard/components/tables/DataTable.vue";

export default {
  name: "datatables",
  components: {
    DatatableSearch,
    DatatableSimple,
  },
  data() {
    return {
      search : ''
    };
  },
  methods:{
    changeSearch(_search){
      let vm = this;
      console.log(_search);
      vm.search = _search;
      if(typeof vm.search !== 'string') {
        vm.search = vm.search.toString();
      }
    }
  }
};
</script>
