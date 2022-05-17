<template>
  <v-card class="card-shadow border-radius-xl z-index-2" elevation="0">
    <!-- <div class="px-2 py-0">
      <h6 class="text-h6 text-typo font-weight-bold">SIR chart</h6>
    </div> -->
    <div class="card-padding">
      <div class="chart">
        <canvas id="SIR-chart" class="chart-canvas" height="350"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "SIR-chart",
  data: function () {
    return {
      sirChartId: "SIR-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.sirChartId).getContext("2d"), {
      type: "line",
      data: {
        labels: [0, "", 2, "", 4, "", 6, "", 8, "", 10, "", 12, ""],
        datasets: [
          {
            label: "Real Data",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "#616161",
            borderColor: "#616161",
            data: [3, 6, 25, 73, 222, 294, 258, 237, 191, 125, 69, 27, 11, 4],
            maxBarThickness: 6,
          },
          {
            label: "Susceptible",
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 1,
            pointBackgroundColor: "#3A416F",
            borderColor: "#3A416F",
            data: [
              762, 757.5, 738.6, 666.9, 477.7, 241.7, 107.8,
              54.7, 33.5, 24, 19.3, 16.7, 15.2, 14.3,
            ],
            maxBarThickness: 6,
          },
          {
            label: "Infected",
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 1,
            pointBackgroundColor: "#17c1e8",
            borderColor: "#17c1e8",
            data: [
              1, 4.3, 18.5, 71.5, 199.3, 310.2, 296,
              224.6, 155.8, 104.2, 68.4, 44.5, 28.8, 18.6,
            ],
            maxBarThickness: 6,
          },
          {
            label: "Recovered",
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 1,
            pointBackgroundColor: "#17ad37",
            borderColor: "#17ad37",
            data: [
              0, 1.1, 5.7, 24.5, 85.8, 210.9, 359.1, 483.5,
              573.5, 634.7, 675.2, 701.7, 718.9, 730,
            ],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 10,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  },
};
</script>
