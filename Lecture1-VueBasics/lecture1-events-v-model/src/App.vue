<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input
        type="text"
        required
        placeholder="email"
        v-model="email"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        type="text"
        required
        placeholder="password"
        show-password
        v-model="password">
      </el-input
    ></el-form-item>
  </el-form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    return { email, password };
  },
};
</script>

<style>
</style>