<template>
  <div>
    <button @click="sorting()">Sort A-Z</button>
    <button @click="sorting(true)">Sort Z-A</button>
    <button @click="shuffle()">Shuffle</button>
    <transition-group appear name="flip" tag="div">
      <p v-for="message in messages" :key="message" class="message--item">
        {{ message }}
      </p>
    </transition-group>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const messages = ref([
      "Transition message",
      "Empty message",
      "Animated message",
      "Combination message",
      "App message",
      "Welcome message",
      "Example message"
    ]);

    const show = ref(false);

    function sorting(isDescending) {
      messages.value.sort();
      if (isDescending) { messages.value.reverse(); }
    }

    function shuffle() {
      messages.value.sort(() => Math.random() - 0.5);
    }

    return { messages, show, sorting, shuffle };
  },
};
</script>

<style scoped>
.message--item {
  transition: all 2s;
}

.flip-enter-from, .flip-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.flip-leave-active {
  position: absolute;
}

.flip-move {
  transition: transform 1s;
}
</style>
