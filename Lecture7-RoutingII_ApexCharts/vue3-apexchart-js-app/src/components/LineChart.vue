<template>
  <div>
    <apexchart
      type="line"
      height="350"
      width="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Desktops",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    });

    const series = ref([
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "Laptops",
        data: [20, 61, 75, 71, 69, 72, 89, 111, 168],
      },
    ]);

    return { chartOptions, series };
  },
};
</script>
