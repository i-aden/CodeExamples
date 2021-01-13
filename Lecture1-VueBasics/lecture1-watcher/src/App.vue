<template>
  <h2>{{ fullName }} </h2>
  <input type="text" placeholder="First Name" @input="setFirstName" />
  <input type="text" placeholder="Last Name" @input="setLastName" />
  <button @click="changeEditor">Change Code Editor</button>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const editor = ref("");

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    function changeEditor() {
      editor.value="Notepad";
    }
    const fullName = computed( () => {
      return firstName.value + " " + lastName.value;
    });

    watch(editor, (newValue, oldValue) => {
      console.log("Previous Editor: " + oldValue);
      console.log("New Editor: " + newValue);
    });
    
    return { setFirstName, setLastName, fullName, changeEditor };
  },
};
</script>

<style>
</style>