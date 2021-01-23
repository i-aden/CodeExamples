<template>
  <el-form label-width="120px" class="demo-ruleForm" @click.stop>
    <h2>Login</h2>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="password"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="margin: auto">Login</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "login",
  emits: [ "login-clicked" ],

  setup() {
    const email = ref("");
    const password = ref("");

    return { email, password };
  },
};
</script>

<style></style>
