<template>
  <el-form label-width="120px" class="demo-ruleForm" @click.stop>
    <h2>Register</h2>

    <el-form-item label="First Name">
      <el-input
        type="text"
        placeholder="First Name"
        required
        autocomplete="off"
        v-model="firstName"
      ></el-input>
    </el-form-item>

    <el-form-item label="Last Name">
      <el-input
        type="text"
        placeholder="Surname"
        required
        autocomplete="off"
        v-model="surname"
      ></el-input>
    </el-form-item>

    <el-form-item label="User Name">
      <el-input
        type="text"
        placeholder="User Name"
        required
        autocomplete="off"
        v-model="userName"
      ></el-input>
    </el-form-item>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="pass">
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
      <el-button
        type="primary"
        style="margin: auto"
        @click="$emit('register-clicked', 'register')"
        >Register</el-button
      >
    </el-form-item>
    
  </el-form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "register",
  emits: [ "register-clicked" ],

  setup() {
    const firstName = ref("");
    const surname = ref("");
    const userName = ref("");
    const email = ref("");
    const password = ref("");

    return { firstName, surname, userName, email, password };
  },
};
</script>

<style></style>
