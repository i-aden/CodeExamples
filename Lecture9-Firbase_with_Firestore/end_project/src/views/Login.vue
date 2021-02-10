<template>
  <el-form label-width="50px" @submit.prevent>
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

    <div v-if="errorFirebase">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorFirebase }}
      </el-button>
    </div>

    <el-form-item>
      <el-button type="success" style="margin: auto" @click="login">
        Login
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";

export default {
  name: "login",
  emits: ["login-clicked"],

  setup() {
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);

    const router = useRouter();

    function login() {
      const info = {
        email: email.value,
        password: password.value,
      };

      firebaseAuthentication
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            router.push("/");
          },
          (error) => {
            errorFirebase.value = error.message;
          }
        );
    }

    return { email, password, errorFirebase, login };
  },
};
</script>

<style></style>
