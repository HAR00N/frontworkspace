<template>
	<v-navigation-drawer
		floating
		id="core-navigation-drawer"
		v-model="drawer"
		:color="'#f8f9fa'"
		:expand-on-hover="expandOnHover"
		:right="$vuetify.rtl"
		mobile-breakpoint="960"
		app
		width="260"
		v-bind="$attrs"
	>
		<v-divider class="mb-1" />

		<!-- https://vuetifyjs.com/en/styles/spacing/ 참고해서 여백 주기 -->
		<v-list-item class="ms-3 mb-1 mt-4 d-flex align-center">
			<v-list-item-icon>
				<v-icon size="35" color="black">mdi-web</v-icon>
			</v-list-item-icon>
			<!-- <v-list-item-tile>
				<v-img src="src/assets/mycharacter/haroonHalf.png" width="60"> </v-img>
			</v-list-item-tile> -->

			<v-list-item-title title class="font-weight-noramal display-2 mr-3"
				>Haroon's Page</v-list-item-title
			>
		</v-list-item>

		<v-divider class="ml-3 mr-3 mb-2" />
		
		<v-list>
			<v-list-item 
				v-for="item in topLink"
				:key="item.title"
				:to="item.to"
				:ripple="false"
				class="mx-2"
				active-class="grey darken-1 white--text rounded"
			>
				<v-list-item-icon>
					<v-icon size="25">{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title
					v-text="item.title"
					class="align-center pt-1"
				></v-list-item-title>
			</v-list-item>
			
			<v-list-group
				:ripple="false"
				v-for="item in itemsPage"
				:key="item.title"
				v-model="item.active"
				:prepend-icon="item.icon"
				no-action
				active-class="grey lighten-5 grey--text rounded"
				class="pa-0 mx-2"
			>
				<template v-slot:activator>
					<v-list-item-content>
						<v-list-item-title v-text="item.title"></v-list-item-title>
					</v-list-item-content>
				</template>

				<v-list-item
					v-for="child in item.items"
					:key="child.title"
					:to="child.to"
					:ripple="false"
					active-class="grey darken-1 white--text rounded"
				>
					<v-list-item-content>
						<v-list-item-title v-text="child.title"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-group>

			<v-list-item
				v-for="item in bottomLink"
				:key="item.title"
				:to="item.to"
				:href="item.href"
				:target="item.target"
				:ripple="false"
				class="mx-2"
			>
				<v-list-item-icon>
					<v-icon size="25">{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title
					v-text="item.title"
					class="align-center pt-1"
				></v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from 'vuex';

export default {
	name: 'DashboardCoreDrawer',

	props: {
		expandOnHover: {
			type: Boolean,
			default: false,
		},
	},

	data: () => ({
		// icon page : https://materialdesignicons.com/
		itemsPage: [
			{
				icon: 'mdi-account',
				title: 'Profile',
				active: false,
				items: [
					{ title: 'Profile', to: '/Profile/Profile' },
					{ title: 'Timeline', to: '/Profile/Timeline' },
				],
			},
			{
				icon: 'mdi-monitor',
				title: 'Work Exp',
				active: false,
				items: [
					{ title: 'Table Search', to: '/Work/TableSearch' },
					{ title: 'Open API', to: '/Work/OpenApi' },
				],
			},
			{
				icon: 'mdi-book-open-variant',
				title: 'Personal Exp',
				active: false,
				items: [
					{ title: 'MERS Modeling', to: '/Personal/MersModeling' },
					{ title: 'Game Modeling', to: '/Personal/GameModeling' },
				],
			},
			// {
			// 	icon: 'mdi-view-dashboard',
			// 	title: 'Dashboard',
			// 	active: false,
			// 	items: [{ title: 'Dashboard', to: '/Dashboard' }],
			// },
			// {
			// 	title: 'Regular Tables',
			// 	icon: 'mdi-clipboard-outline',
			// 	active: false,
			// 	items: [{ title: 'Regular Tables', to: '/tables/regular-tables' }],
			// },
			// {
			// 	title: 'Typography',
			// 	icon: 'mdi-format-font',
			// 	active: false,
			// 	items: [{ title: 'Typography', to: '/components/typography' }],
			// },
			{
				title: 'Icons',
				icon: 'mdi-chart-bubble',
				active: false,
				items: [{ title: 'Icons', to: '/components/icons' }],
			},
			// {
			// 	title: 'Google Maps',
			// 	icon: 'mdi-map-marker',
			// 	active: false,
			// 	items: [{ title: 'Google Maps', to: '/maps/google-maps' }],
			// },
			// {
			// 	title: 'Notifications',
			// 	icon: 'mdi-bell',
			// 	active: false,
			// 	items: [{ title: 'Notifications', to: '/components/notifications' }],
			// },
		],
		topLink: [
			{
				title: 'Home',
				icon: 'mdi-home',
				to: '/',
			},
		],
		bottomLink: [
			{
				title: `Haroon's Github`,
				icon: 'mdi-github',
				href: 'https://github.com/HAR00N',
				target: '_blank',
			},
		],
	}),

	computed: {
		...mapState(['barColor', 'barImage']),
		drawer: {
			get() {
				return this.$store.state.drawer;
			},
			set(val) {
				this.$store.commit('SET_DRAWER', val);
			},
		},
		computedItems() {
			return this.items.map(this.mapItem);
		},
		profile() {
			return {
				avatar: true,
				title: this.$t('avatar'),
			};
		},
	},

	methods: {
		mapItem(item) {
			return {
				...item,
				children: item.children ? item.children.map(this.mapItem) : undefined,
				title: this.$t(item.title),
			};
		},
	},
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
