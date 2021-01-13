<template>
  <div class="common-layout">
    <el-container>
      <el-header>Events in Action</el-header>
      <el-main>
        <el-button type="warning">Add</el-button>
        <el-button type="warning">Remove</el-button>
        <el-button type="warning" plain>Result: {{ counter }}</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  setup() {
    const counter = 0;

    return { counter };
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
