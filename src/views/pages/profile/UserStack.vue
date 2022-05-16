<template>
  <div>
    <v-container fluid class="pb-6 pt-3">
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="card-shadow mb-30">
            <div class="pt-2">
              <h2 class="mb-0 mt-4 ml-6 pl-4">Timeline</h2>
            </div>
            <v-card-text class="px-0 pt-0">
              <v-timeline dense align-top class="timeline-line-color">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="36" color="#ffffff" v-if="item.icon">
                      <v-icon
                        :class="`text-gradient text-` + item.btn"
                        size="26"
                        >{{ item.icon }}</v-icon
                      >
                    </v-avatar>
                    <v-avatar size="36" color="#ffffff" v-if="!item.icon">
                      <!-- <div v-html="item.action"> {{item.action}} </div> -->
                      <v-avatar size="26"
                        ><img
                          :src="item.src"
                          class="color-grey"
                      /></v-avatar>
                    </v-avatar>
                  </template>

                  <v-card width="400">
                    <v-card-title class="px-4 pt-2 pb-1 d-block">
                      <h6
                        class="text-dark text-sm font-weight-bold mb-0 d-block"
                      >
                        {{ item.title }}
                      </h6>
                      <p class="text-secondary font-weight-bold text-xs mb-0">
                        {{ item.date }}
                      </p>
                    </v-card-title>
                    <v-card-text class="px-4">
                      <p class="text-sm mt-3 mb-2 text-body">
                        People care about how you see the world, how you think,
                        what motivates you, what you’re struggling with or
                        afraid of.
                      </p>
                      <div class="mt-3">
                        <v-btn
                          :v-if="item.badges"
                          v-for="item2 in item.badges"
                          :key="item2.text"
                          elevation="0"
                          small
                          :ripple="false"
                          height="21"
                          class="border-radius-sm text-xxs text-white me-1 shadow-none font-weight-bold px-3 py-1 badge-font-size"
                          :class="`bg-gradient-` + item.btn"
                          >{{ item2.text }}</v-btn
                        >
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="0" class="card-shadow rounded position-sticky top-1">
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
      </v-row>
    </v-container>

    <top-button />
  </div>
</template>

<script>
import TopButton from "../../dashboard/components/util/TopButton.vue";
export default {
  name: "timeline",
  components: {
    TopButton,
  },
  data() {
    return {
      timeline: [
        {
          title: "Portfolio page 개발",
          date: "22 MAY.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-hammer-wrench",
          btn: "info",
          badges: [
            {
              text: "server",
            },
            {
              text: "payments",
            },
          ],
        },
        {
          title: "한국 부동산원 직원 홈페이지 개발",
          date: "22 FEB.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-application-brackets-outline",
          btn: "warning",
          badges: [
            {
              text: "card",
            },
            {
              text: "#4395133",
            },
            {
              text: "priority",
            },
          ],
        },
        {
          title: "국립 강릉원주대학교 HIGH 고도화",
          date: "22 FEB.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-auto-fix",
          btn: "primary",
          badges: [
            {
              text: "development",
            },
          ],
        },
        {
          title: "다인리더스 인턴",
          date: "22 FEB.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-tie",
          btn: "success",
          badges: [
            {
              text: "message",
            },
          ],
        },
        {
          title: "모바일게임 점수 예측 모델링",
          date: "19 SEP.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-chart-line",
          btn: "info",
        },
        {
          title: "건국대학교 수학 프로그래밍",
          date: "17 MAR.",
          color: "#fdd1da",
          iconColor: "#f80031",
          src: "src/assets/icon/matlab.svg",
          btn: "warning",
          badges: [
            {
              text: "request",
            },
            {
              text: "priority",
            },
          ],
        },
        {
          title: "건국대학교 편입학",
          date: "17 MAR.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-pencil",
          btn: "warning",
          badges: [
            {
              text: "request",
            },
            {
              text: "priority",
            },
          ],
        },
        {
          title: "강남대학교 응용수학과 학술제 최우수상",
          date: "14 SEP.",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-license",
          btn: "default",
          badges: [
            {
              text: "controller",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$card-box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05) !default;
$border-radius-xl: 1rem !default;

.card-shadow {
  box-shadow: $card-box-shadow !important;
}
.border-radius-xl {
  border-radius: $border-radius-xl !important;
}

.top-1 {
  top: 1% !important;
}
</style>
