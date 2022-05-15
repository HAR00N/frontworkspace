<template>
  <div>
    <v-container fluid class="pb-6 pt-0">
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            elevation="0"
            class="card-shadow border-radius-xl position-sticky top-1"
          >
            <v-list
              v-for="(item, i) in timeline"
              :key="item.title + i"
              class="ma-4 pt-4"
            >
              <v-list-item v-if="item.action">
                맨위에 고정 <br />
                position sticky
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card class="card-shadow border-radius-xl mb-30">
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
                          src="../../../assets/icon/matlab.svg"
                          class="color-filter"
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
          title: "엘크로니클 길드전 점수 예측 모델링",
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
          action:
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="-80 -120 700 700"><path d="M495.85495,367.604248c-28.9803467-73.1774597-53.0365906-148.2316895-80.7252808-221.8935089c-12.2297668-31.3618469-24.1973877-62.9860611-40.8671875-92.3295364c-6.6195374-10.5348358-12.9564819-22.1188946-23.8140564-28.8593864c-2.7394409-1.7407379-5.8284912-2.4797993-8.8795776-2.4216614c-5.0852356,0.096571-10.1411743,2.3711586-14.0261536,5.6506233c-14.5708618,11.5436554-23.2085266,28.3346519-32.8954163,43.7936096c-17.1139526,28.6977844-35.1559448,58.7478027-63.7731628,77.3953247c-13.4405823,9.4851074-31.0388947,10.514389-43.9951324,20.6858521c-17.7192688,13.3600159-29.7674561,32.3103027-44.2981567,48.7379303c-3.3095093,3.9554596-8.4356537,5.5296631-12.9158478,7.6687622C86.3153,243.7111053,42.9456635,261.3495483,0,279.9165344c36.3665314,28.1326294,75.1148148,53.1575317,112.2080917,80.3215027c10.171463-2.0181274,20.3830795-6.1955566,30.8772659-4.3390503c16.6296387,5.2069397,26.3771362,21.150238,34.005722,35.7210999c15.4991302,31.7653809,26.6998596,65.3067322,39.2525787,98.2829285c20.9886169-1.4934082,39.8782959-12.3105469,56.1041565-25.0248718c31.2406616-25.3072205,55.0342712-58.0010986,81.2298279-88.1922913c12.5527344-13.1986694,25.3475952-28.9197388,44.1968994-32.592865c19.0513-4.6014099,39.4545593,2.2198792,53.5814819,15.337738C471.2739868,377.1499939,488.8318787,397.6340637,512,411.1958618C508.8919983,395.8581238,501.4250183,382.094574,495.85495,367.604248z M171.84375,316.0408936c-18.2841492,10.8174133-37.6985779,19.7171936-56.709465,29.1621399c-29.8280487-19.9795532-58.8889542-41.1497192-88.192276-61.8557739c39.5149345-17.3154907,79.6354065-33.4001923,119.6750793-49.5452576c18.9704895,14.8132782,38.546524,28.8796082,57.5167694,43.692627C195.2138672,291.7427368,184.4772797,304.9815674,171.84375,316.0408936z M212.5091553,266.3948975c-18.8492889-14.1673279-37.9407349-27.9510803-56.5076904-42.4815369c11.9070282-16.2258606,24.9440765-31.9067841,40.5643921-44.7016754c10.33284-6.6195374,22.9663544-8.4561005,33.7029572-14.4296875c25.4688263-12.7143402,42.8448944-36.043808,59.4338837-58.3240738C268.4317627,161.673996,245.7277832,217.1122589,212.5091553,266.3948975z"/></svg>',
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
          icon: "mdi-package-variant",
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
          icon: "mdi-google-controller",
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

<style>
.color-filter {
  filter: invert(46%) sepia(21%) saturate(16%) hue-rotate(1deg) brightness(95%)
    contrast(84%);
}
</style>

<style lang="scss">
$card-box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05) !default;
$border-radius-xl: 1rem !default;

.card-shadow {
  box-shadow: $card-box-shadow !important;
}
.border-radius-xl {
  border-radius: $border-radius-xl !important;
}
.position-sticky {
  position: sticky;
}
.top-1 {
  top: 1% !important;
}
</style>
