<template>
  <h3>Line Chart Example</h3>
  <div>
    <line-chart class="center"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";

export default {
  components: {
    LineChart,
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
