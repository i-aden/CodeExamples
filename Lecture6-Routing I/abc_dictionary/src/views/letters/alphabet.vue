<template>
  <div v-for="letter in letters" :key="letter.id">
    <router-link :to="{ name: 'Letters', params: { id: letter.letterName } }">
      <h3>{{ letter.letterName }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    const letters = [
      { id: 1, letterName: "A" },
      { id: 2, letterName: "B" },
      { id: 3, letterName: "C" },
    ];

    return { letters };
  },
};
</script>

<style></style>
