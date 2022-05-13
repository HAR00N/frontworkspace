<template>
  <div>
    <v-container fluid class="">
      <v-row class="">
        <v-col md="5" cols="12" class="py-0">
          <sir-chart></sir-chart>
        </v-col>
        <v-col md="7" cols="12">
          
        </v-col>
      </v-row>

      <v-row>
        <v-col md="5" cols="12" class="py-0">
          <seir-chart></seir-chart>
        </v-col>
        <v-col md="7" cols="12">
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import SirChart from "../../dashboard/components/chart/SirChart.vue";
import SeirChart from "../../dashboard/components/chart/SeirChart.vue";

export default {
  components: {
    SirChart,
    SeirChart,
  },
};
</script>
