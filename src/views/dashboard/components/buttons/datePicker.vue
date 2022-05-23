<template>
  <v-row>
    <v-col>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            class="shrink"
            v-model="date"
            label="Date"
            append-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          class="my-0 pt-4"
          color="primary"
          v-model="date"
          @change="[dateUpdate(date), $refs.menu.save(date), (menu = false)]"
          scrollable
          no-title
          :max="maxDate"
          :min="minDate"
        >
          <!-- <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn
            text
            color="primary"
            @click="[$refs.menu.save(date), dateUpdate(date)]"
          >
            OK
          </v-btn> -->
        </v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["minDate", "maxDate"],
  data: () => ({
    // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //   .toISOString()
    //   .substr(0, 10),
    date: null,
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    dateUpdate(date) {
      let vm = this;
      vm.$emit("dateUpdate", date);
    },
  },
};
</script>