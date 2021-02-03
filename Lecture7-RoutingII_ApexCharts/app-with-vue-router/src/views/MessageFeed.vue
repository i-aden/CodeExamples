<template>
  <div>
    <h2>Message Feed</h2>
    <div v-for="(message, index) in messages" :key="index">
      <!-- <router-link :to="{ name: 'MessageFeed', params: { content: message } }"> -->
        <router-link :to="{ name: 'Message', params: { id: index } }">
        {{ message }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
