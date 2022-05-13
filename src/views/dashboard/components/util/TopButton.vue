<template>
  <v-container class="scroll-y">
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-btn
          :ripple="false"
          v-scroll="onScroll"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
        >
          <v-icon size="30">mdi-chevron-up</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "GoTopButton",
  data: () => ({
    fab: false,
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
</style>