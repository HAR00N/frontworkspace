<template>
  <div>
    <v-container fluid class="pb-6 pt-3">
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="card-shadow mb-30 pa-4" elevation="0">
            <div class="pt-2">
              <h2 class="mb-2 mt-2 ml-6 pl-4">Timeline</h2>
            </div>
            <v-timeline dense align-top class="timeline-line-color">
              <!-- <v-timeline-item
                v-for="(item, i) in timeline"
                :key="i"
                :color="item.color"
              > -->
              <v-timeline-item
                v-for="(item, i) in timeline"
                :key="i"
                color="grey"
              >
                <template v-slot:icon>
                  <v-avatar size="40" v-if="item.icon">
                    <v-icon
                      :class="`text-gradient text-` + item.btn"
                      size="22"
                      color="#ffffff"
                      >{{ item.icon }}</v-icon
                    >
                  </v-avatar>

                  <v-avatar size="36" v-if="!item.icon">
                    <v-avatar size="22"
                      ><img :src="item.src" class="color-default"
                    /></v-avatar>
                  </v-avatar>
                </template>

                <!-- <template>
                  <h3 :class="`font-weight-light ${item.color}--text`">
                    {{ item.date }}
                  </h3>
                </template>
                <div class="pb-0 pt-0 pr-12 mr-10">
                  <h3 :class="`font-weight-normal mb-4 ${item.color}--text`">
                    {{ item.title }}
                  </h3>
                  <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </div>
                </div> -->

                <template>
                  <h3 :class="`font-weight-light black--text`">
                    {{ item.date }}
                  </h3>
                </template>
                <div class="pb-0 pt-0 mr-6">
                  <h3 :class="`font-weight-normal mb-4 black--text`">
                    {{ item.title }}
                  </h3>
                  <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </div>
                </div>

                <div class="mt-2">
                  <v-btn
                    :v-if="item.badges"
                    v-for="item2 in item.badges"
                    :key="item2.text"
                    elevation="0"
                    small
                    :ripple="false"
                    :color="item2.color"
                    height="21"
                    class="border-radius-sm text-xxs text-white me-1 shadow-none font-weight-bold px-2 py-1 badge-font-size"
                  >
                    <div class="mr-1">
                      <v-icon v-if="item2.icon"> {{ item2.icon }} </v-icon>
                      <img
                        v-if="!item2.icon"
                        :src="item2.src"
                        :class="`color-${item2.iconColor} pt-1`"
                        height="17"
                      />
                    </div>
                    <div :class="`${item2.iconColor}--text font-weight-normal`">
                      {{ item2.text }}
                    </div>
                  </v-btn>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="0" class="position-sticky" rounded="lg">
            <base-material-card
              class="v-card-profile"
              elevation="0"
              avatar="src/assets/mycharacter/haroonwhiteback.png"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">Fullstack Dev</h6>

                <h4 class="display-2 font-weight-medium mb-3 black--text">
                  Haroon
                </h4>

                <p class="font-weight-light grey--text">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>

                <v-btn color="blue lighten-1" rounded class="mr-0">
                  Follow
                </v-btn>
              </v-card-text>
            </base-material-card>
          </v-card>
        </v-col>
        <top-button />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopButton from "../../dashboard/components/util/TopButton.vue";
export default {
  components: { TopButton },
  data: () => ({
    timeline: [
      {
        title: "Portfolio page 개발",
        date: "22 MAY",
        color: "cyan",
        icon: "mdi-hammer-wrench",
        badges: [
          {
            text: "Vue.js",
            iconColor: "default",
            color: "#4FC08D",
            src: "src/assets/icon/vuejs.svg",
          },
          {
            text: "Vuetify.js",
            iconColor: "default",
            color: "#1867C0",
            src: "src/assets/icon/vuetify.svg",
          },
          {
            text: "JS ES6",
            iconColor: "black",
            color: "#F7DF1E",
            src: "src/assets/icon/javascript.svg",
          },
          {
            text: "Git",
            iconColor: "default",
            color: "#F05032",
            src: "src/assets/icon/git.svg",
          },
        ],
      },
      {
        title: "공공 데이터 포털 Api 적용",
        date: "22 APR",
        color: "amber",
        icon: "mdi-application-brackets-outline",
        badges: [
          {
            text: "Spring Boot",
            iconColor: "default",
            color: "#6DB33F",
            src: "src/assets/icon/springboot.svg",
          },
          {
            text: "Kotlin",
            iconColor: "default",
            color: "#7F52FF",
            src: "src/assets/icon/kotlin.svg",
          },
          {
            text: "Gradle",
            iconColor: "default",
            color: "#02303A",
            src: "src/assets/icon/gradle.svg",
          },
          {
            text: "Go",
            iconColor: "default",
            color: "#00ADD8",
            src: "src/assets/icon/go.svg",
          },
          {
            text: "MySQL",
            iconColor: "default",
            color: "#4479A1",
            src: "src/assets/icon/mysql.svg",
          },
          {
            text: "Git",
            iconColor: "default",
            color: "#F05032",
            src: "src/assets/icon/git.svg",
          },
        ],
      },
      {
        title: "공공 기업 직원 홈페이지 개발",
        date: "22 FEB",
        color: "amber",
        icon: "mdi-file-document",
        badges: [
          {
            text: "Spring",
            iconColor: "default",
            color: "#6DB33F",
            src: "src/assets/icon/spring.svg",
          },
          {
            text: "java",
            iconColor: "default",
            color: "#007396",
            src: "src/assets/icon/java.svg",
          },
          {
            text: "Maven",
            iconColor: "default",
            color: "#C71A36",
            src: "src/assets/icon/maven.svg",
          },
          {
            text: "Docker",
            iconColor: "default",
            color: "#2496ED",
            src: "src/assets/icon/docker.svg",
          },
          {
            text: "MySQL",
            iconColor: "default",
            color: "#4479A1",
            src: "src/assets/icon/mysql.svg",
          },
          {
            text: "Vue.js",
            iconColor: "default",
            color: "#4FC08D",
            src: "src/assets/icon/vuejs.svg",
          },
          {
            text: "Vuetify.js",
            iconColor: "default",
            color: "#1867C0",
            src: "src/assets/icon/vuetify.svg",
          },
          {
            text: "JS ES6",
            iconColor: "black",
            color: "#F7DF1E",
            src: "src/assets/icon/javascript.svg",
          },
          {
            text: "Git",
            iconColor: "default",
            color: "#F05032",
            src: "src/assets/icon/git.svg",
          },
        ],
      },
      {
        title: "국립 대학교 사이트 고도화",
        date: "22 FEB",
        color: "orange",
        icon: "mdi-auto-fix",
        badges: [
          {
            text: "Spring",
            iconColor: "default",
            color: "#6DB33F",
            src: "src/assets/icon/spring.svg",
          },
          {
            text: "java",
            iconColor: "default",
            color: "#007396",
            src: "src/assets/icon/java.svg",
          },
          {
            text: "Maven",
            iconColor: "default",
            color: "#C71A36",
            src: "src/assets/icon/maven.svg",
          },
          {
            text: "Tomcat",
            iconColor: "black",
            color: "#F8DC75",
            src: "src/assets/icon/tomcat.svg",
          },
          {
            text: "Oracle",
            iconColor: "default",
            color: "#F80000",
            src: "src/assets/icon/oracle.svg",
          },
          {
            text: "Jquery",
            iconColor: "default",
            color: "#0769AD",
            src: "src/assets/icon/jquery.svg",
          },{
            text: "SVN",
            iconColor: "default",
            color: "#809CC9",
            src: "src/assets/icon/svn.svg",
          },
        ],
      },
      {
        title: "인턴",
        date: "22 FEB",
        color: "green",
        icon: "mdi-tie",
        badges: [
          {
            text: "java",
            iconColor: "default",
            color: "#007396",
            src: "src/assets/icon/java.svg",
          },
          {
            text: "matlab",
            iconColor: "default",
            color: "#FF7F00",
            src: "src/assets/icon/matlab.svg",
          },
          {
            text: "Git",
            iconColor: "default",
            color: "#F05032",
            src: "src/assets/icon/git.svg",
          },
        ],
      },
      {
        title: "모바일게임 점수 예측 모델링",
        date: "19 SEP",
        color: "pink",
        icon: "mdi-chart-line",
        badges: [
          {
            text: "matlab",
            iconColor: "default",
            color: "#FF7F00",
            src: "src/assets/icon/matlab.svg",
          },
          {
            text: "excel",
            iconColor: "default",
            color: "#217346",
            src: "src/assets/icon/excel.svg",
          },
        ],
      },
      {
        title: "수학 프로그래밍",
        date: "17 MAR",
        color: "amber",
        src: "src/assets/icon/matlab.svg",
        badges: [
          {
            text: "matlab",
            iconColor: "default",
            color: "#FF7F00",
            src: "src/assets/icon/matlab.svg",
          },
        ],
      },
      {
        title: "편입학",
        date: "17 MAR",
        color: "orange",
        icon: "mdi-pencil",
      },
      {
        title: "응용수학과 학술제 최우수상",
        date: "14 SEP",
        color: "cyan",
        icon: "mdi-license",
        badges: [
          {
            text: "ppt",
            iconColor: "default",
            color: "#B7472A",
            src: "src/assets/icon/ppt.svg",
          },
        ],
      },
    ],
  }),
};
</script>
