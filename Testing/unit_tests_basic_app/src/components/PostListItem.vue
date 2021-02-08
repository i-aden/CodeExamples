<template>
  <router-link :to="{ name: 'SinglePost', params: { postID: slug } }">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div>
      <a v-for="tag in tags" :key="tag"> #{{ tag }} </a>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
