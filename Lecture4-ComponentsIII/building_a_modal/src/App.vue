<template>
  <div class="common-layout" @keyup.esc.stop="closeModal()">

    <el-container>
      <el-button type="warning" style="margin: auto" @click="showModal">Show Modal</el-button>

      <el-button type="warning" style="margin: auto" @click="showModal('login')">Login</el-button>

      <el-button type="warning" style="margin: auto" @click="showModal('register')">Register</el-button>

      <modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
        <login v-if="actionLoginOrRegister === 'login'"></login>
        <Register v-else-if="actionLoginOrRegister === 'register'"/>
      </modal>
    </el-container>

  </div>
</template>

<script>
import Modal from "./components/Modal";
import Login from "./components/Login";
import Register from "./components/Register";
import { ref } from "vue";

export default {
  name: "App",

  components: {
    Modal,
    Login,
    Register,
  },

  setup() {
    const isModalVisible = ref(false);
    const actionLoginOrRegister = ref("");

    function showModal(action) {
      actionLoginOrRegister.value = action;
      isModalVisible.value = true;
    }

    function closeModal() {
      isModalVisible.value = false;
    }

    return { isModalVisible, actionLoginOrRegister, showModal, closeModal };
  },
};
</script>

<style>
.el-button {
  display: block;
  width: auto;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
