<template>
  <div>
    <el-card class="box-card">
      <div v-if="user">
        Welcome back
        <span style="color: green; font-weight: bold">{{ user.displayName }}</span>,
        <el-button type="text" icon="el-icon-user" @click="$emit('logout')">Logout</el-button>

        <div><router-link :to="{ name: 'Post' }"><el-button type="text" icon="el-icon-plus">Add a Post</el-button></router-link></div>
      </div>
    </el-card>
    <PostListItem
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"

      @delete-post="deletePost"
    />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";

export default {
  components: { PostListItem },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    function deletePost(slug) {
      context.emit("delete-post", slug);
    }

    return { deletePost };
  }
};
</script>
