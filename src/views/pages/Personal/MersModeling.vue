<template>
  <div>
    <v-container fluid class="">
      <v-row class="">
        <v-col cols="12" lg="6">
          <base-material-my-card class="pa-0" color="grey lighten-3">
            <template v-slot:heading>
              <sir-chart />
            </template>

            <h4 class="card-title font-weight-light mt-2 ml-2">
              SIR Model
              <git-hub
                :href="`https://github.com/HAR00N/MERS_modelling/tree/main/SIR`"
                :title="`SIR`"
              />
            </h4>

            <p class="d-inline-flex font-weight-light ml-2 mt-1 mb-1">
              <v-icon color="#616161"> mdi-circle-medium </v-icon>
              : Real data
              <v-icon color="#3A416F"> mdi-minus-thick </v-icon>
              : Susceptible
              <v-icon color="cyan"> mdi-minus-thick </v-icon>
              : Infected
              <v-icon color="green"> mdi-minus-thick </v-icon>
              : Recovered
            </p>

            <v-card class="mb-1 mt-0 mx-4" elevation="0">
              Real data : 실제 감염군 수 <br />
              Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은
              개체의 수 <br />
              Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 <br />
              Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한
              개체의 수의 합
            </v-card>

            <template v-slot:actions>
              <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
              <span class="caption grey--text font-weight-light"
                >updated 4 minutes ago</span
              >
            </template>
          </base-material-my-card>
        </v-col>

        <v-col cols="12" lg="6">
          <base-material-my-card class="pa-0" color="blue-grey lighten-4">
            <template v-slot:heading>
              <seir-chart />
            </template>

            <h4 class="card-title font-weight-light mt-2 ml-2">
              SEIR Model
              <git-hub
                :href="`https://github.com/HAR00N/MERS_modelling/tree/main/SEIR`"
                :title="`SEIR`"
              />
            </h4>

            <p class="d-inline-flex font-weight-light ml-2 mt-1 mb-1">
              <v-icon color="#616161"> mdi-circle-medium </v-icon>
              : Real data
              <v-icon color="#3A416F"> mdi-minus-thick </v-icon>
              : Susceptible
              <v-icon color="accent"> mdi-minus-thick </v-icon>
              : Exposed
              <v-icon color="cyan"> mdi-minus-thick </v-icon>
              : Infected
              <v-icon color="green"> mdi-minus-thick </v-icon>
              : Recovered
            </p>

            <v-card class="mb-1 mt-0 mx-4" elevation="0">
              Real data : 실제 감염군 수 <br />
              Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은
              개체의 수 <br />
              Exposed (접촉군) : 이미 감염되었으나 아직 병을 전염시키지는 않는
              단계에 있는 개체의 수 <br />
              Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 <br />
              Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한
              개체의 수의 합
            </v-card>

            <template v-slot:actions>
              <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
              <span class="caption grey--text font-weight-light"
                >updated 4 minutes ago</span
              >
            </template>
          </base-material-my-card>
        </v-col>

        <!-- <v-col md="6" cols="12" class="py-0 my-0">
          <v-card class="pl-4" elevation="0">
            <h3 class="pt-2">
              SIR Model
              <git-hub
                :href="`https://github.com/HAR00N/MERS_modelling/tree/main/SIR`"
                :title="`SIR`"
              ></git-hub>
            </h3>
            <div>
              <span class="grey--text"> ● </span> : Real data
              <span class="secondary--text"> ■ </span> : Susceptible
              <span class="cyan--text"> ■ </span> : Infected
              <span class="green--text"> ■ </span> : Infected
            </div>

            <h4 class="mt-4 mx-4 pb-4 font-weight-light">
              Real data : 실제 감염군 수 <br>
              Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은 개체의 수 <br>
              Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 <br>
              Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한 개체의 수의 합
            </h4>

            <v-card class="mt-3 mx-4 pb-4" elevation="0">
              Real data : 실제 감염군 수 <br />
              Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은
              개체의 수 <br />
              Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 <br />
              Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한
              개체의 수의 합
            </v-card>

            <h4>a=0.4749, b=1.967</h4>
          </v-card>
        </v-col>
        <v-spacer />

        <v-col md="6" cols="12" class="py-0 my-0">
          <v-card class="pl-4" elevation="0">
            <h3 class="pt-2">
              SEIR Model
              <git-hub
                :href="`https://github.com/HAR00N/MERS_modelling/tree/main/SEIR`"
                :title="`SEIR`"
              >
              </git-hub>
            </h3>
            <div>
              <span class="grey--text"> ● </span> : Real data
              <span class="secondary--text"> ■ </span> : Susceptible
              <span class="accent--text"> ■ </span> : Exposed
              <span class="cyan--text"> ■ </span> : Infected
              <span class="green--text"> ■ </span> : Infected
            </div>

            <v-card class="mt-3 mx-4 pb-4" elevation="0">
              Real data : 실제 감염군 수 <br />
              Susceptible (감염대상군) : 감염될 수 있으나 아직 감염되지 않은
              개체의 수 <br />
              Exposed (접촉군) : 이미 감염되었으나 아직 병을 전염시키지는 않는
              단계에 있는 개체의 수 <br />
              Infected (감염군) : 병을 전염시킬 수 있는 개체의 수 <br />
              Recovered (회복군) : 병에서 회복한 개체의 수와 격리 중 사망한
              개체의 수의 합
            </v-card>

            <h4>잠복기 α=0.475 감염률 β=8.106 회복률 κ(감마) = 0.6703</h4>
          </v-card>
        </v-col>
        <v-spacer /> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SirChart from "../../dashboard/components/chart/SirChart.vue";
import SeirChart from "../../dashboard/components/chart/SeirChart.vue";
import GitHub from "../../dashboard/components/buttons/myGithub.vue";

export default {
  components: {
    SirChart,
    SeirChart,
    GitHub,
  },
};
</script>
