<template>
  <div>
    <div>
      <el-form ref="form" label-width="0px">
        <el-form-item label="">
          <el-input type="textarea" v-model="formInput"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSendClick()">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>

    <transition
      name="slide-right"
      enter-active-class="slide-right"
      leave-active-class="slide-left"
    >
      <section v-if="message" class="message--display">
        <h4>Your saved message:</h4>

        <span>{{ message }}</span>
      </section>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("");
    const formInput = ref("");

    function onSendClick() {
      message.value = formInput.value;

      formInput.value = "";
    }

    return { message, formInput, onSendClick };
  },
};
</script>

<style scoped>
@keyframes slide-right {
  100% {
    transform: translateX(0);
  }
}

.slide-right-enter-from {
  border-top: 0;
}

.slide-right {
  animation: 1s slide-right 1s forwards;
  transform: translateX(-100%);
  transition: border-top 2s ease;
}

.slide-left {
  animation: 1s slide-right 1s reverse;
  transform: translateX(-100%);
}
</style>
