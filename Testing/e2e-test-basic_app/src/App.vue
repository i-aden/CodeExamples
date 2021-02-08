<template>
  <div>
    <h2>Observer</h2>
    <button data-test-id="new-comment-button" @click="showEditor = !showEditor">
      Add a New Comment
    </button>

    <div v-if="showEditor">
      <textarea
        data-test-id="new-comment-editor"
        v-model="newComment"
      >
      </textarea>

      <button data-test-id="new-comment-submit">
        Submit
      </button>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showEditor = ref(false);

    const newComment = ref("");

    return { showEditor, newComment };
  },
};
</script>
