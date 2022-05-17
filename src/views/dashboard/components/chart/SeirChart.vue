<template>
  <v-card class="card-shadow border-radius-xl z-index-2" elevation="0">
    <!-- <div class="px-2 py-0">
      <h6 class="text-h6 text-typo font-weight-bold">SEIR chart</h6>
    </div> -->
    <div class="card-padding">
      <div class="chart">
        <canvas id="SEIR-chart" class="chart-canvas" height="350"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "SEIR-chart",
  data: function () {
    return {
      seirChartId: "SEIR-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.seirChartId).getContext("2d"), {
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
              762.0, 749.5, 689.8, 452.1, 99.3, 5.6, 0.2,
              0.0158, 0.002, 0.0005, 0.0002, 0.0001, 0.0001, 0.0,
            ],
            maxBarThickness: 6,
          },
          {
            label: "Exposed",
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 1,
            pointBackgroundColor: "#cb0c9f",
            borderColor: "#cb0c9f",
            data: [
              0, 9.7, 52.4, 210.9, 358.9, 243.3, 127.5,
              65.2, 33.3, 17, 8.6, 4.4, 2.2, 1.1,
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
              1, 2.9, 16.3, 76.6, 214.2, 297.3, 278.9,
              221.8, 162.5, 113.6, 77, 51.1, 33.4, 21.6,
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
              0, 0.7, 4.4, 23.2, 90.5, 216.6, 356.2, 475.9,
              567, 632.3, 677.2, 707.3, 727.2, 740.1,
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
