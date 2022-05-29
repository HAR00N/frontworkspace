<template>
  <v-container>
    <v-row>
      <v-col class="text-right" cols="12" md="4">
        <img src="@/assets/mycharacter/haroon.png" class="align-center" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container>
          <v-row>
            <v-card color="transparent" elevation="0">
              <!-- <v-card-title class="main-title justify-end"> Hello! </v-card-title>
          <v-card-subtitle class="main-subtitle text-right mt-4 ml-2">
            Welcome to my Portfolio
          </v-card-subtitle> -->
              <v-card-title class="main-title"> Hello! </v-card-title>
              <v-card-subtitle class="main-subtitle mt-4 ml-2">
                Welcome to my Portfolio
              </v-card-subtitle>
            </v-card>
          </v-row>
          <v-row class="ml-2">
            <v-col cols="12" md="4" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  Name</v-card-text
                >
                <v-card-text class="pt-1 pl-2 pr-0 pb-2 underline"> 이규헌 </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  Birth</v-card-text
                >
                <v-card-text class="pt-1 pl-2 pr-0 pb-2 underline"> 1995. 12. 11 </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  Address</v-card-text
                >
                <v-card-text class="pt-1 pl-2 pr-0 pb-2 underline">
                  성남시 분당구 야탑동
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ml-2">
            <v-col cols="12" md="6" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  E-mail</v-card-text
                >
                <v-card-text class="pt-1 px-0 pb-2 underline">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        x-small
                        color="transparent"
                        elevation="0"
                        class="ma-0 px-1"
                        href="mailto:rustic606@gmail.com"
                        target="_blank"
                        v-on="on"
                        v-bind="attrs"
                        ><v-icon color="black">mdi-email-edit</v-icon></v-btn
                      >rustic606@gmail.com
                    </template>
                    <span> Mail to me </span>
                  </v-tooltip>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  GitHub</v-card-text
                >
                <v-card-text class="pt-1 px-0 pb-2 underline">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        x-small
                        color="transparent"
                        elevation="0"
                        class="ma-0 px-1"
                        href="https://github.com/HAR00N"
                        target="_blank"
                        v-on="on"
                        v-bind="attrs"
                        ><v-icon color="black">mdi-github</v-icon></v-btn
                      >github.com/HAR00N
                    </template>
                    <span> Click to GitHub </span>
                  </v-tooltip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ml-2">
            <v-col cols="12" md="6" class="px-4 py-0">
              <v-card elevation="0" class="px-0 py-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  Educational Qualifications</v-card-text
                >
                <v-card-text class="pt-1 pl-2 pr-0 pb-0">
                  2017.03 - 2022.02 건국대학교(서울) 졸업</v-card-text
                >
                <v-card-text class="pl-2 pr-0 pb-2 pt-1 underline">
                  2014.03 - 2017.02 강남대학교 중퇴</v-card-text
                >
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="px-4 py-0">
              <v-card elevation="0" class="px-0" color="transparent" tile>
                <v-card-text class="text-caption grey--text py-0 px-0">
                  Employment (Intern)
                </v-card-text>
                <v-card-text class="pt-1 pl-2 pr-0 pb-0">
                  2022.02 - 2022.05 (3개월)
                </v-card-text>
                <v-card-text class="pr-0 pl-2 pb-2 pt-1 underline">
                  (주)다인리더스
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.main-title {
  font-family: "Malgun Gothic";
  font-size: 4em;
}
.main-subtitle {
  font-family: "Malgun Gothic";
  font-size: 3em;
  line-height: 100%;
}
.underline {
  border-bottom: 1px solid #bdbdbd !important;
}
</style>
