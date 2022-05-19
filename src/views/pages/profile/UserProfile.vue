<template>
	<v-container id="user-profile" fluid tag="section">
		<v-row justify="center">
			<v-col cols="12" md="8">
				<base-material-card>
					<template v-slot:heading>
						<div class="display-2 font-weight-medium black--text">Profile</div>

						<div class="subtitle-1 font-weight-light white--text pl-1">Haroon's Dev profile</div>
					</template>

					<v-card elevation="0" class="pb-5">
						<v-container class="py-0">
							<v-row>
								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px-0" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title1</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test1 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px-0" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title2</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test2 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title3</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test3 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="6" class="px-4">
									<v-card elevation="0" class="mt-0 px" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title4</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test4 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="6" class="px-4">
									<v-card elevation="0" class="mt-0 px" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title5</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test5 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" class="px-4">
									<v-card elevation="0" class="mt-0 px" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title6</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test6 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px-0" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title7</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test7 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px-0" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title8</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test8 </v-card-text>
									</v-card>
								</v-col>

								<v-col cols="12" md="4" class="px-4">
									<v-card elevation="0" class="mt-0 px" tile>
										<v-card-text class="text-caption grey--text pb-0 px-0">
											title9</v-card-text
										>
										<v-card-text class="pt-1 px-0 pb-2"> test9 </v-card-text>
									</v-card>
								</v-col>

								<!-- <v-col cols="12">
									<v-textarea
										class="purple-input"
										label="About Me"
										value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
									/>
								</v-col>

								<v-col cols="12" class="text-right">
									<v-btn color="blue lighten-2" class="mr-0">
										Update Profile
									</v-btn>
								</v-col> -->
							</v-row>
						</v-container>
					</v-card>
				</base-material-card>
			</v-col>

			<v-col cols="12" md="4">
				<profile-card/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ProfileCard from "../../dashboard/components/core/ProfileCard.vue"
export default {
	components: { ProfileCard },
};
</script>

<style>
.mt-0 {
	border-bottom: 1px solid #bdbdbd !important;
}
</style>
