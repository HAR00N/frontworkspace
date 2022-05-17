<template>
  <v-tooltip right>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :ripple="false"
        class="ml-2 px-2 text-white me-1 shadow-none font-weight-bold badge-font-size"
        elevation="0"
        small
        height="21"
        color="#181717"
        :href="href"
        target="_blank"
        v-on="on"
        v-bind="attrs"
      >
        <div class="mr-1">
          <img
            src="src/assets/icon/github.svg"
            class="color-default"
            height="15"
          />
        </div>
        {{ title }}
      </v-btn>
    </template>
    <span> Click to Code </span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["href", "title"],
};
</script>

<style>
</style>