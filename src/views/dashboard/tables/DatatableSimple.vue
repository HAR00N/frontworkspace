<template>
  <div>
    <v-card class="card-shadow border-radius-xl">
      <div class="card-header-padding">
        <div class="d-flex align-center">
          <div>
            <h5 class="font-weight-bold text-h5 text-typo mb-0">
            </h5>
            <p class="text-sm text-body mb-0">
            </p>
          </div>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-bold
                  text-capitalize
                  ms-auto
                  btn-primary
                  bg-gradient-primary
                  py-3
                  px-6
                  ms-3
                "
                >엑셀 다운로드</v-btn
              >
            </template>
            <v-card class="card-shadow border-radius-xl">
              <div class="card-header-padding card-border-bottom">
                <span class="font-weight-bold text-h5 text-typo mb-0">{{
                  formTitle
                }}</span>
              </div>
              <v-card-text class="card-padding">
                <v-container class="px-0">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.name"
                        hide-details
                        class="
                          input-style
                          font-size-input
                          text-light-input
                          placeholder-light
                          input-icon
                        "
                        dense
                        flat
                        filled
                        solo
                        height="43"
                        placeholder="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.email"
                        hide-details
                        class="
                          input-style
                          font-size-input
                          text-light-input
                          placeholder-light
                          input-icon
                        "
                        dense
                        flat
                        filled
                        solo
                        height="43"
                        placeholder="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.age"
                        hide-details
                        class="
                          input-style
                          font-size-input
                          text-light-input
                          placeholder-light
                          input-icon
                        "
                        dense
                        flat
                        filled
                        solo
                        height="43"
                        placeholder="Age"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.salary"
                        hide-details
                        class="
                          input-style
                          font-size-input
                          text-light-input
                          placeholder-light
                          input-icon
                        "
                        dense
                        flat
                        filled
                        solo
                        height="43"
                        placeholder="Salary"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="card-padding d-flex justify-end">
                <v-btn
                  @click="close"
                  elevation="0"
                  :ripple="false"
                  height="43"
                  class="
                    font-weight-bold
                    text-capitalize
                    btn-ls btn-secondary
                    bg-gradient-light
                    py-3
                    px-6
                  "
                  >Cancel</v-btn
                >

                <v-btn
                  @click="save"
                  elevation="0"
                  :ripple="false"
                  height="43"
                  class="
                    font-weight-bold
                    text-capitalize
                    btn-ls btn-primary
                    bg-gradient-primary
                    py-3
                    px-6
                  "
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>

      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          class="table"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          mobile-breakpoint="0"
        >
          <template v-slot:top>
            <v-toolbar flat height="0">
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card class="card-shadow card-padding border-radius-xl">
                  <v-card-title class="pt-0 text-h5 text-typo justify-center"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions class="pb-0">
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="closeDelete"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-bold
                        text-capitalize
                        btn-ls
                        bg-gradient-light
                        py-3
                        px-6
                      "
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="deleteItemConfirm"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-bold
                        text-capitalize
                        btn-ls btn-primary
                        bg-gradient-primary
                        py-3
                        px-6
                      "
                      >Ok</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center">
              <span class="text-sm font-weight-normal text-body">
                {{ item.name }}
              </span>
            </div>
          </template>

          <template v-slot:item.email="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.email }}
            </span>
          </template>

          <template v-slot:item.age="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.age }}
            </span>
          </template>

          <template v-slot:item.salary="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.salary }}
            </span>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              @click="editItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="#67748e"
            >
              <v-icon size="12">ni-ruler-pencil</v-icon>
            </v-btn>

            <v-btn
              @click="deleteItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="#67748e"
            >
              <v-icon size="12">ni-fat-remove text-lg</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="card-padding">
        <v-row>
          <v-col cols="6" lg="3" class="d-flex align-center">
            <span class="text-body me-3 text-sm">Items per page:</span>
            <v-text-field
              hide-details
              type="number"
              outlined
              min="-1"
              max="15"
              background-color="rgba(255,255,255,.9)"
              color="rgba(0,0,0,.6)"
              light
              :value="itemsPerPage"
              @input="itemsPerPage = parseInt($event, 10)"
              placeholder="Items per page"
              class="
                font-size-input
                placeholder-lighter
                text-color-light
                input-alternative input-focused-alternative input-icon
              "
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="ml-auto d-flex justify-end">
            <v-pagination
              prev-icon="fa fa-angle-left"
              next-icon="fa fa-angle-right"
              class="pagination"
              color="#cb0c9f"
              v-model="page"
              :length="pageCount"
              circle
            ></v-pagination>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>

export default {
  name: "paginated-tables",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      users:[
  {
    id: 1,
    name: "Noelia O'Kon",
    nickname: "asperiores",
    email: "otho.smitham@example.com",
    salary: "13098.00",
    age: 39,
  },
  {
    id: 2,
    name: "Mr. Enid Von PhD",
    nickname: "alias",
    email: "pollich.cecilia@example.com",
    salary: "35978.00",
    age: 26,
  },
  {
    id: 3,
    name: "Colton Koch",
    nickname: "id",
    email: "little.myrna@example.net",
    salary: "26278.00",
    age: 48,
  },
  {
    id: 4,
    name: "Gregory Vandervort",
    nickname: "vel",
    email: "dock47@example.org",
    salary: "25537.00",
    age: 27,
  },
  {
    id: 5,
    name: "Miss Rahsaan Heaney IV",
    nickname: "qui",
    email: "ugrady@example.org",
    salary: "49003.00",
    age: 21,
  },
  {
    id: 6,
    name: "Ms. Crystel Zemlak IV",
    nickname: "reiciendis",
    email: "amari.rau@example.com",
    salary: "12383.00",
    age: 48,
  },
  {
    id: 7,
    name: "Nona McDermott",
    nickname: "quaerat",
    email: "adrien.baumbach@example.org",
    salary: "18512.00",
    age: 31,
  },
  {
    id: 8,
    name: "Miss Genoveva Murazik V",
    nickname: "rerum",
    email: "ohettinger@example.net",
    salary: "31209.00",
    age: 28,
  },
  {
    id: 9,
    name: "Beulah Huels",
    nickname: "non",
    email: "stefan99@example.com",
    salary: "36920.00",
    age: 53,
  },
  {
    id: 10,
    name: "Zoe Klein",
    nickname: "ex",
    email: "ejacobson@example.org",
    salary: "35616.00",
    age: 27,
  },
  {
    id: 11,
    name: "Vickie Kiehn",
    nickname: "assumenda",
    email: "ayost@example.com",
    salary: "30790.00",
    age: 29,
  },
  {
    id: 12,
    name: "Elwyn Herzog",
    nickname: "praesentium",
    email: "ckassulke@example.net",
    salary: "35785.00",
    age: 27,
  },
  {
    id: 13,
    name: "Selena Hettinger",
    nickname: "et",
    email: "bashirian.hyman@example.net",
    salary: "31836.00",
    age: 35,
  },
  {
    id: 14,
    name: "Edwin Beier",
    nickname: "eos",
    email: "janis71@example.org",
    salary: "11902.00",
    age: 38,
  },
  {
    id: 15,
    name: "Lexi Braun MD",
    nickname: "autem",
    email: "dusty74@example.net",
    salary: "11927.00",
    age: 45,
  },
  {
    id: 16,
    name: "Jovany Spencer",
    nickname: "fugit",
    email: "gbogisich@example.org",
    salary: "44686.00",
    age: 43,
  },
  {
    id: 17,
    name: "Prof. Maci Anderson DVM",
    nickname: "dolorem",
    email: "btorp@example.com",
    salary: "25055.00",
    age: 29,
  },
  {
    id: 18,
    name: "Joel Kulas MD",
    nickname: "sed",
    email: "phoebe.sauer@example.org",
    salary: "11650.00",
    age: 24,
  },
  {
    id: 19,
    name: "Mr. Dawson Greenholt",
    nickname: "nostrum",
    email: "asawayn@example.org",
    salary: "46962.00",
    age: 53,
  },
  {
    id: 20,
    name: "Prof. Lloyd Green",
    nickname: "velit",
    email: "laila.hintz@example.org",
    salary: "12928.00",
    age: 46,
  },
  {
    id: 21,
    name: "Shayna Morar",
    nickname: "rerum",
    email: "wfay@example.org",
    salary: "22638.00",
    age: 26,
  },
  {
    id: 22,
    name: "Krista Schulist",
    nickname: "qui",
    email: "gregoria.jakubowski@example.com",
    salary: "49345.00",
    age: 42,
  },
  {
    id: 23,
    name: "Leone Lemke",
    nickname: "repellat",
    email: "ltorphy@example.com",
    salary: "17560.00",
    age: 42,
  },
  {
    id: 24,
    name: "Dr. Willie Kemmer II",
    nickname: "quasi",
    email: "ivy51@example.net",
    salary: "35370.00",
    age: 30,
  },
  {
    id: 25,
    name: "Deonte Lebsack",
    nickname: "nesciunt",
    email: "alisa83@example.net",
    salary: "32725.00",
    age: 24,
  },
  {
    id: 26,
    name: "Prof. Shayne Nader",
    nickname: "voluptas",
    email: "bosco.shaina@example.net",
    salary: "9844.00",
    age: 23,
  },
  {
    id: 27,
    name: "Prof. Kennith Kertzmann",
    nickname: "alias",
    email: "satterfield.jonathan@example.com",
    salary: "41950.00",
    age: 25,
  },
  {
    id: 28,
    name: "Miss Meagan O'Keefe",
    nickname: "corporis",
    email: "tracy.barrows@example.com",
    salary: "41803.00",
    age: 50,
  },
  {
    id: 29,
    name: "Prof. Edward Pagac MD",
    nickname: "quia",
    email: "gerhard65@example.org",
    salary: "22896.00",
    age: 43,
  },
  {
    id: 30,
    name: "Samantha Weissnat",
    nickname: "est",
    email: "crystel66@example.net",
    salary: "18805.00",
    age: 43,
  },
  {
    id: 31,
    name: "Dr. Gilbert Ward",
    nickname: "dolorum",
    email: "sandrine06@example.net",
    salary: "16644.00",
    age: 32,
  },
  {
    id: 32,
    name: "Mike West",
    nickname: "laudantium",
    email: "jborer@example.net",
    salary: "35728.00",
    age: 42,
  },
  {
    id: 33,
    name: "Prof. Isabell Cruickshank I",
    nickname: "recusandae",
    email: "ondricka.lurline@example.org",
    salary: "44574.00",
    age: 35,
  },
  {
    id: 34,
    name: "Prof. Lonny Rath",
    nickname: "nihil",
    email: "rfeest@example.net",
    salary: "19949.00",
    age: 48,
  },
  {
    id: 35,
    name: "Santina Medhurst MD",
    nickname: "suscipit",
    email: "ila24@example.net",
    salary: "36323.00",
    age: 51,
  },
  {
    id: 36,
    name: "Jeff Lehner",
    nickname: "quo",
    email: "jarred77@example.com",
    salary: "48462.00",
    age: 42,
  },
  {
    id: 37,
    name: "Samanta Pfeffer",
    nickname: "officia",
    email: "fgoyette@example.net",
    salary: "19601.00",
    age: 42,
  },
  {
    id: 38,
    name: "Ofelia Torp",
    nickname: "a",
    email: "ericka44@example.net",
    salary: "33149.00",
    age: 35,
  },
  {
    id: 39,
    name: "Mrs. Margarete Raynor",
    nickname: "quia",
    email: "jlegros@example.net",
    salary: "21951.00",
    age: 40,
  },
  {
    id: 40,
    name: "Mr. Brant Howell V",
    nickname: "perspiciatis",
    email: "franecki.gerald@example.org",
    salary: "41552.00",
    age: 53,
  },
  {
    id: 41,
    name: "Reilly Ruecker DVM",
    nickname: "ad",
    email: "ldeckow@example.net",
    salary: "22709.00",
    age: 42,
  },
  {
    id: 42,
    name: "Zachery McDermott",
    nickname: "molestiae",
    email: "gladyce84@example.com",
    salary: "32354.00",
    age: 25,
  },
  {
    id: 43,
    name: "Heloise Kulas",
    nickname: "aut",
    email: "kessler.helen@example.net",
    salary: "45086.00",
    age: 54,
  },
  {
    id: 44,
    name: "Norma Dibbert",
    nickname: "amet",
    email: "eudora36@example.net",
    salary: "15661.00",
    age: 46,
  },
  {
    id: 45,
    name: "Immanuel Auer",
    nickname: "quia",
    email: "halvorson.theodora@example.org",
    salary: "15862.00",
    age: 39,
  },
  {
    id: 46,
    name: "Lamont Borer",
    nickname: "expedita",
    email: "trantow.neoma@example.com",
    salary: "12544.00",
    age: 25,
    },
    {
    id: 47,
    name: "Brooke Purdy",
    nickname: "cupiditate",
    email: "bhermiston@example.net",
    salary: "14457.00",
    age: 50,
    },
    {
    id: 48,
    name: "Dr. Leo Dach",
    nickname: "et",
    email: "camila.ward@example.com",
    salary: "40278.00",
    age: 49,
    },
    {
    id: 49,
    name: "Krystal Langosh",
    nickname: "voluptatum",
    email: "pacocha.yesenia@example.org",
    salary: "9305.00",
    age: 34,
    },
    {
    id: 50,
    name: "Florence Greenfelder",
    nickname: "odit",
    email: "kenyatta.oconnell@example.com",
    salary: "36980.00",
    age: 38,
      },
    ],
      search: "",
      editedIndex: -1,
      editedItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      defaultItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      headers: [
        {
          text: "Name",
          align: "start",
          cellClass: "border-bottom",
          sortable: false,
          value: "name",
          class: "text-secondary font-weight-bolder opacity-7 border-bottom",
        },
        {
          text: "Email",
          value: "email",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Age",
          value: "age",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Salary",
          value: "salary",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-secondary font-weight-bolder opacity-7",
        },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.items.length / this.pagination.rowsPerPage)
        : 0;
    },
  },
};
</script>
