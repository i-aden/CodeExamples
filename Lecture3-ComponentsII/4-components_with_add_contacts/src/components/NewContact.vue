<template>
  <el-form ref="form" label-width="auto">

    <!-- Name field -->
    <el-form-item size="medium" label="Name">
      <el-input v-model="inputName"></el-input>
    </el-form-item>

    <!-- Phone field -->
    <el-form-item label="Phone">
      <el-input v-model="inputPhone"></el-input>
    </el-form-item>

    <!-- Email field -->
    <el-form-item label="Email">
      <el-input v-model="inputEmail"></el-input>
    </el-form-item>

    <!-- AddContact button -->
    <el-form-item>
      <el-button type="success" @click="submitInputData">Add Contact</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import { ref } from "vue";

export default {
    emits: ["add-contact"],

    setup(props, context) {
        const inputName = ref("");
        const inputPhone = ref("");
        const inputEmail = ref("");

        function submitInputData() {
            context.emit("add-contact", inputName.value, inputPhone.value, inputEmail.value );
        }

        return { inputName, inputPhone, inputEmail, submitInputData };
    }
};
</script>

<style></style>
