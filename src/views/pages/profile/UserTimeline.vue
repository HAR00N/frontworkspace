<template>
  <div>
    <v-container fluid class="pb-6 pt-3">
      <v-row>
        <v-col cols="12" md="8">
          <base-material-card>
          <template v-slot:heading>
						<div class="display-2 font-weight-medium black--text">Timeline</div>

						<div class="subtitle-1 font-weight-light white--text pl-1">Haroon's timeline</div>
					</template>
            <!-- <div class="pt-2">
              <h2 class="mb-2 mt-2 ml-6 pl-4">Timeline</h2>
            </div> -->
            <v-card class="card-shadow mb-30 pa-4 pt-0 mt-0" elevation="0">
              <v-timeline dense align-top class="timeline-line-color elevation-0">
                <!-- <v-timeline-item
                v-for="(item, i) in timeline"
                :key="i"
                :color="item.color"
              > -->
                <v-timeline-item
                  v-for="(item, i) in timelines"
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
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                      Commune scaevola imperdiet nec ut, sed euismod convenire
                      principes at. Est et nobis iisque percipit, an vim zril
                      disputando voluptatibus, vix an salutandi sententiae.
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
                      <div
                        :class="`${item2.iconColor}--text font-weight-normal`"
                      >
                        {{ item2.text }}
                      </div>
                    </v-btn>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </base-material-card>
        </v-col>

        <v-col cols="12" md="4">
          <profile-card />
        </v-col>
        <top-button />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopButton from "../../dashboard/components/util/TopButton.vue";
import ProfileCard from "../../dashboard/components/core/ProfileCard.vue";
import TimelineData from "../../dashboard/components/data/TimelineData.json"
export default {
  components: { TopButton, ProfileCard },
  mounted () {
    this.timelines = TimelineData
  },
  data: () => ({
    timelines:[{
      title: "",
        date: "",
        color: "",
        icon: "",
        badges: [
          {
            text: "",
            iconColor: "",
            color: "",
            src: "",
          },
        ],
    }],
  }),
};
</script>
