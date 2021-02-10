<template>
  <div>
    <h3 style="color: #696969">Post: {{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    posts: {
      type: Array,
      default: () => {},
    },
  },

  setup(props) {
    const route = useRoute();
    console.log(props.posts);
    const post = computed(() => {
      const postID = route.params.postID;

      return props.posts.find((p) => p.slug === postID);
    });

    const title = computed(() => {
      return post.value && post.value.title;
    });

    const content = computed(() => {
      return post.value && post.value.content;
    });

    return { title, content };
  },
};
</script>
