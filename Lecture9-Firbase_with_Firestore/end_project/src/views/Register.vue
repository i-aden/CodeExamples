<template>
  <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
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

    <el-form-item label="Display Name">
      <el-input
        type="text"
        placeholder="Display Name"
        required
        autocomplete="off"
        v-model="displayName"
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

    <el-form-item label="Confirm Password" prop="pass">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="confirmPassword"
      ></el-input>
    </el-form-item>

    <div v-if="errorRegistration">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorRegistration }}
      </el-button>
    </div>

    <el-form-item>
      <el-button type="success" style="margin: auto" @click="register"
        >Register</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication } from "@/firebase/database";

export default {
  name: "register",
  emits: ["register-clicked"],

  setup() {
    const firstName = ref("");
    const surname = ref("");
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorRegistration = ref("");

    watch(confirmPassword, () => {
      if (
        password.value !== "" &&
        confirmPassword.value !== "" &&
        password.value !== confirmPassword.value
      ) {
        errorRegistration.value = "Passwords do not match!";
      } else {
        errorRegistration.value = null;
      }
    });

    const router = useRouter();

    function register() {
      const info = {
        email: email.value,
        password: password.value,
        displayName: displayName.value,
      };

      if (!errorRegistration.value) {
        firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName,
                })
                .then(() => {
                  router.replace("register");
                });
            },
            (error) => {
              errorRegistration.value = error.message;
            }
          );
      }
    }

    return {
      firstName,
      surname,
      displayName,
      email,
      password,
      confirmPassword,
      errorRegistration,
      register,
    };
  },
};
</script>

<style></style>
