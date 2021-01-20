<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your name" v-model="enteredName" />
      <input type="text" placeholder="Your age" v-model="enteredAge" />
      <button>Set Scientist Data</button>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["set-data"],
  setup(props, context) {
    const enteredName = ref("");
    const enteredAge = ref("");

    function submitData() {
      context.emit("set-data", enteredName.value, enteredAge.value);
    }

    return { enteredName, enteredAge, submitData };
  },
};
</script>
