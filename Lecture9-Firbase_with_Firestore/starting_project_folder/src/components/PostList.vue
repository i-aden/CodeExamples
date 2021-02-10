<template>
  <div>
    <PostListItem
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
    />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";
export default {
  components: {PostListItem },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
