<template>
  <div>
    <v-container fluid class="px-6 py-0">
       <v-row class="mt-8">
        <v-col cols="12">
          <datatable-search
            :titleSearch="title"
            :contentsSearch="content">
          </datatable-search>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="12">
          <datatable-simple>
          </datatable-simple>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DatatableSearch from "../../dashboard/tables/DetailSearch.vue";
import DatatableSimple from "../../dashboard/tables/DatatableSimple.vue";

export default  {
  name: "datatables",
  components: {
    DatatableSearch,
    DatatableSimple
  },
  data(){
    return{
        list  : [], 
        title : '조직관리',
        content : '부하육성관리',
        url: '/api/adm/community/notice/list',
        header :  [
        {
          text: "작성자",
          align: "title",
          cellClass: "border-bottom",
          sortable: false,
          value: "name",
          class: "text-secondary font-weight-bolder opacity-7 border-bottom",
        },
        {
          text: "제목",
          value: "title",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "조회수",
          value: "uid",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "등록일",
          value: "insert_dt",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-secondary font-weight-bolder opacity-7",
        }]
    }
  },
  //computed:vuex.mapState(["list"]),
   mounted(){
      let vm = this;
      vm.getList();
  }
  , methods:{
     async getList(){
      
         let param = {paramText:JSON.stringify({data:''})};
         let _list =  await this.$store.dispatch('FETCH_LIST', '/api/adm/community/notice/list', param);
         this.list = _list.data.list.list;  
     },
    
  }
};
</script>
