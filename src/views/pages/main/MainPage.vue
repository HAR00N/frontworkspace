<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card color="transparent" elevation="0">
          <v-card-title class="main-title justify-end"> Hello! </v-card-title>
          <v-card-subtitle class="main-subtitle text-right mt-4 ml-2">
            Welcome to my Portfolio
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <img src="@/assets/mycharacter/haroon.png" class="align-center" />
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
</style>
