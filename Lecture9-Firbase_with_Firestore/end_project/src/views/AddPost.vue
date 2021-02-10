<template>
  <div style="margin: auto; text-align: center;"><h2>Add Post</h2></div>

  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Slug">
      <el-input v-model="slug"></el-input>
    </el-form-item>

    <el-form-item label="Title">
      <el-input v-model="title"></el-input>
    </el-form-item>

    <el-form-item label="Description">
      <el-input v-model="description"></el-input>
    </el-form-item>

    <el-form-item label="Content">
      <el-input type="textarea" v-model="content"></el-input>
    </el-form-item>

    <el-form-item label="Tags">
      <el-input v-model="tags"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="addPost">Create Post</el-button>
      <router-link :to="{ name: 'PostList' }"
        ><el-button>Cancel</el-button></router-link
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  emits: ["add-post"],
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const slug = ref("");
    const title = ref("");
    const description = ref("");
    const content = ref("");
    const tags = ref("");

    const router = useRouter();

    function addPost() {
      context.emit("add-post", slug.value, title.value, description.value, content.value, tags.value);

      router.push("/");
    }

    return { slug, title, description, content, tags, addPost };
  },
};
</script>

<style></style>
