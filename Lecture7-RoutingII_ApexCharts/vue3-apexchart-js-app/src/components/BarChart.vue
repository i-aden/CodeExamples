<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptionsBasicBarChart"
      :series="seriesBasicBarChart"
    ></apexchart>

    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div>
      <button @click="updateBarChart">Update!</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const chartOptionsBasicBarChart = ref({
      chart: {
        id: "barchart-example",
      },
      xaxis: {
        categories: [
          "Jan 2015",
          "Feb 2015",
          "Mar 2015",
          "Apr 2015",
          "May 2015",
          "June 2015",
          "July 2015",
          "Aug 2015",
          "Sep 2015",
          "Oct 2015",
          "Nov 2015",
          "Dec 2015",
        ],
      },
    });

    const seriesBasicBarChart = ref([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ]);

    const chartOptions = ref({
      chart: {
        id: "barchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    });

    const series = ref([
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ]);

    function updateBarChart() {
      const max = 90;
      const min = 20;
      const newData = series.value[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      chartOptions.value = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
      // In the same way, update the series option
      series.value = [
        {
          data: newData,
        },
      ];
    }

    return {
      chartOptionsBasicBarChart,
      seriesBasicBarChart,
      chartOptions,
      series,
      updateBarChart
    };
  },
};
</script>
