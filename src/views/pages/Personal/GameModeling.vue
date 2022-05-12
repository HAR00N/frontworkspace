<template>
	<div>
		<v-container fluid class="">
			<v-row class="">
				<v-col lg="7" class="pt-0 z-index-2">
					<v-card class="card-shadow border-radius-xl">
						<v-card-text class="card-padding">
							<div class="chart-area">
								<canvas :height="300" :id="ordersChartID"></canvas>
							</div>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col lg="5">
					<v-card elevation="0"> 안녕하세요 </v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col md="6" cols="12">
					<line-chart></line-chart>
				</v-col>
				<v-col md="6" cols="12">
					<bubble-chart></bubble-chart>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { ordersChart } from '@/views/dashboard/components/chart/TestChart.js';
import LineChart from '../../dashboard/components/chart/LineChart.vue';
import BubbleChart from '../../dashboard/components/chart/BubbleChart.vue';

export default {
  components: { LineChart, BubbleChart },
	name: 'Dashboard',

	data: function () {
		return {
			ordersChartID: 'ordersChart',
		};
	},
	mounted() {
		ordersChart.createChart(this.ordersChartID);
	},
};
</script>
