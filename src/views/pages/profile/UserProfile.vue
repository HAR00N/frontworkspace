<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-medium black--text">
              Skill Set
            </div>

            <div class="subtitle-1 font-weight-light white--text pl-1">
              Haroon's Dev Skills
            </div>
          </template>

          <v-card elevation="0" class="pb-5">
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4" class="py-2 px-4">
                  <v-card-title class="pa-0"> Stack Now </v-card-title>
                </v-col>
              </v-row>

              <v-row class="pl-2">
                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px-0" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      Backend</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-0">
                      Java, Matlab
                    </v-card-text>
                    <v-card-text class="px-0 py-1">
                      SpringMVC (Egovframework)
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-0">
                      Mybatis, Maven
                    </v-card-text>
                    <!-- <v-card-text class="pt-1 px-0 pb-1"> Java, Spring MVC (Egovframework), Matlab </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-1"> Mybatis, Maven </v-card-text> -->
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px-0" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      Frontend</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-1">
                      JavaScript (ES6)
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-1">
                      Vue.js, Vuetify.js
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      DevOps & Tools</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-0">
                      MySQL, MariaDB, Oracle
                    </v-card-text>
                    <v-card-text class="px-0 py-1">
                      Tomcat, Docker
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-0"> Git, SVN </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-divider class="mb-4" />
              <v-row>
                <v-col cols="12" md="4" class="py-2 px-4">
                  <v-card-title class="pa-0 pt-4">
                    Stack Practice
                  </v-card-title>
                </v-col>
                <v-col cols="12" md="4"> </v-col>
                <v-col cols="12" md="4" class="py-0 px-2">
                  <v-card-title class="pa-0 pt-4"> IDEs </v-card-title>
                </v-col>
              </v-row>
              <v-row class="pl-2">
                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px-0" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      Backend</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-0">
                      Kotlin, Go
                    </v-card-text>
                    <v-card-text class="px-0 py-1">
                      Spring Boot, Node.js
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-0">
                      JPA, Gradle
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px-0" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      Frontend</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-1"> JSP </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-1"> JQuery </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="mt-0 px" tile>
                    <v-card-text class="text-caption grey--text pa-0 pt-2">
                      IDEs</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-0">
                      Eclipse (Egovframework)
                    </v-card-text>
                    <v-card-text class="px-0 py-1">
                      VScode, IntelliJ, GoLand
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-0">
                      DBeaver, MySQL Workbench
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-divider />
            </v-container>
          </v-card>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="sticky" color="transparent" elevation="0">
          <profile-card />
        </v-card>
      </v-col>
    </v-row>
<!--
    <v-row>
      <v-col cols="12" md="8">
        <base-material-card color="#BDBDBD">
          <template v-slot:heading>
            <div class="display-2 font-weight-medium black--text">Project</div>

            <div class="subtitle-1 font-weight-light white--text pl-1">
              Experienced Project
            </div>
          </template>

          <v-card elevation="0" class="pb-2 mb-0">
            <v-container class="py-0">
              <v-row>
                
                
                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="underline px-0" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      Name</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-2"> 이규헌 </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="underline px-0" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      Birth</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-2">
                      1995. 12. 11
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="px-4 pt-0">
                  <v-card elevation="0" class="underline px" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      Address</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-2">
                      성남시 분당구 야탑동
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="px-4">
                  <v-card elevation="0" class="underline px" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      E-mail</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-2">
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
                            ><v-icon color="black"
                              >mdi-email-edit</v-icon
                            ></v-btn
                          >rustic606@gmail.com
                        </template>
                        <span> Mail to me </span>
                      </v-tooltip>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="px-4">
                  <v-card elevation="0" class="underline px" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      GitHub</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-2">
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

                <v-col cols="12" md="6" class="px-4">
                  <v-card elevation="0" class="underline" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      Educational Qualifications</v-card-text
                    >
                    <v-card-text class="pt-1 px-0 pb-0">
                      2017.03 - 2022.02 건국대학교(서울) 졸업</v-card-text
                    >
                    <v-card-text class="px-0 pb-2 pt-1">
                      2014.03 - 2017.02 강남대학교 중퇴</v-card-text
                    >
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="px-4">
                  <v-card elevation="0" class="underline px" tile>
                    <v-card-text class="text-caption grey--text pb-0 px-0">
                      Employment (Intern)
                    </v-card-text>
                    <v-card-text class="pt-1 px-0 pb-0">
                      2022.02 - 2022.05 (3개월)
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-1">
                      (주)다인리더스
                    </v-card-text>
                  </v-card>
                </v-col>
                
              </v-row>
              
            </v-container>
          </v-card>
        </base-material-card>
      </v-col>

      <top-button />
    </v-row>
    -->
  </v-container>
</template>

<script>
import ProfileCard from "../../dashboard/components/core/ProfileCard.vue";
import TopButton from "../../dashboard/components/util/TopButton.vue";
export default {
  components: { ProfileCard, TopButton },
};
</script>

<style>
.underline {
  border-bottom: 1px solid #bdbdbd !important;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
