<template>
  <div>
    <h2>Message Feed</h2>
    <div v-for="(message, index) in messages" :key="index">
      <router-link :to="{ name: 'Message', params: { content: message } }">
        {{ message }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const messages = ref([
      "Hello, how are you?",
      "The weather is nice",
      "This is a message feed",
      "I am the fourth message",
    ]);

    return { messages };
  },
};
</script>
