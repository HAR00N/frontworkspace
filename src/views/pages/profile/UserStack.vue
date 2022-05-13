<template>
  <div>
    <v-container fluid class="pb-6 pt-0">
      <v-row>
        <v-col cols="12" md="4">
          <v-card elevation="0" class="card-shadow border-radius-xl position-sticky top-1" height="400">
            <div class="ma-4 pt-4">
                맨위에 고정 <br>
                position sticky
            </div>
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
                    <v-avatar size="26" color="#ffffff">
                      <v-icon
                        :class="`text-gradient text-` + item.btn"
                        size="16"
                        >{{ item.icon }}</v-icon
                      >
                    </v-avatar>
                  </template>

                  <v-card width="820">
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
                          class="
                            border-radius-sm
                            text-xxs text-white
                            me-1
                            shadow-none
                            font-weight-bold
                            px-3
                            py-1
                            badge-font-size
                          "
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

    <top-button/>

  </div>  
</template>



<script>
import TopButton from '../../dashboard/components/util/TopButton.vue';
export default {
  name: "timeline",
  components: {
    TopButton
      
  },
  data() {
    return {
      timeline: [
        {
          title: "$2400, Design changes",
          date: "22 DEC 7:20 PM",
          color: "#b0eed3",
          iconColor: "#1aae6f",
          icon: "mdi-bell",
          btn: "success",
          badges: [
            {
              text: "desgin",
            },
          ],
        },
        {
          title: "New order #1832412",
          date: "21 DEC 11 PM",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-language-html5",
          btn: "danger",
          badges: [
            {
              text: "order",
            },
            {
              text: "#1832412",
            },
          ],
        },
        {
          title: "Server payments for April",
          date: "21 DEC 9:34 PM",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-cart",
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
          title: "New card added for order #4395133",
          date: "20 DEC 2:20 AM",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-credit-card",
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
          title: "Unlock packages for development",
          date: "18 DEC 4:54 AM",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-key",
          btn: "primary",
          badges: [
            {
              text: "development",
            },
          ],
        },
        {
          title: "New message unread",
          date: "16 DEC",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-archive",
          btn: "success",
          badges: [
            {
              text: "message",
            },
          ],
        },
        {
          title: "Notifications unread",
          date: "15 DEC",
          color: "#fdd1da",
          iconColor: "#f80031",
          icon: "mdi-check-bold",
          btn: "info",
        },
        {
          title: "New request",
          date: "14 DEC",
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
          title: "Controller issues",
          date: "13 DEC",
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


<style lang="scss">
$card-box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05) !default;
$border-radius-xl:            1rem !default;

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