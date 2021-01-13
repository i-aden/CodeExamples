<template>
  <div class="common-layout">
    <el-container>
      <el-header>Events in Action</el-header>
      <el-main>
        <el-button type="warning" @click="incrementCounter(10)">Add 10</el-button>
        <el-button type="warning" @click="decrementCounter(5)">Subtract 5</el-button>
        <el-button type="warning" plain>Result: {{ counter }}</el-button>
        <p v-once>Initial Counter Value: {{ counter }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(11);

    function incrementCounter(num) {
      counter.value += num;
    }

    function decrementCounter(num) {
      counter.value -= num;
    }
    
    return { counter, incrementCounter, decrementCounter };
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  font-size: x-large;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  font-weight: bold;
  font-size: x-large;
}
</style>
