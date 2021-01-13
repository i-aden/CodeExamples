<template>
  <h2>{{ fullName }} </h2>
  <input type="text" placeholder="First Name" @input="setFirstName" />
  <input type="text" placeholder="Last Name" @input="setLastName" />
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const fullName = computed( () => {
      return firstName.value + " " + lastName.value;
    });

    return { setFirstName, setLastName, fullName };
  },
};
</script>

<style>
</style>