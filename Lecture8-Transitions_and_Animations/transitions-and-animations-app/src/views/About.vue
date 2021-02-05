<template>
  <div class="about">
    <button @click="toggleButton">
      Toggle
    </button>

    <transition name="bounce">
      <h1 v-if="show">This is an about page</h1>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const show = ref(false);

    function toggleButton() {
      show.value = !show.value;
    }
    
    return { show, toggleButton };
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
