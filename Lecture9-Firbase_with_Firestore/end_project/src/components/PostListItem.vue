<template>
  <el-card>
    <router-link :to="{ name: 'SinglePost', params: { postID: slug } }">
      <h3>{{ title }}</h3>
      <p>{{ descriptionEllipsisFilter }}</p>
    </router-link>
    <div>
      <router-link
        :to="{ name: 'TagPage', params: { tagName: tag } }"
        v-for="tag in tags"
        :key="tag"
      >
        <el-button type="success" plain>#{{ tag }}</el-button>
      </router-link>
    </div>

    <div>
      <el-button
        type="success"
        icon="el-icon-delete-solid"
        circle
        style="margin-top: 10px;"
        @click="deletePost"
      ></el-button>
    </div>
  </el-card>
</template>

<script>
import { computed } from "vue";
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
  setup(props, context) {
    // Will truncate value if longer than 50 characters and add ellipsis.
    const descriptionEllipsisFilter = computed(() => {
      return props.description && props.description.length > 50
        ? `${props.description.slice(0, 50)}...`
        : props.description;
    });

    function deletePost() {
      context.emit("delete-post", props.slug);
    }

    return { descriptionEllipsisFilter, deletePost };
  },
};
</script>
