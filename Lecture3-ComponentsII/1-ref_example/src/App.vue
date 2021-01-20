<template>
  <h1>{{ exampleBlurb }}</h1>
  <h3>{{ exampleBlurbAgain }}</h3>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      let exampleBlurb = ref("This blurb will change in 3 seconds ...");

      setTimeout(() => {
        exampleBlurb.value = "ref makes the primitive variable 'reactive'.";
      }, 3000);

      let exampleBlurbAgain = "This blurb will change in 3 seconds. It will never change because it is NOT reactive!";

      setTimeout(() => {
        exampleBlurbAgain = "This should never be shown!!!";
      }, 3000);

      return { exampleBlurb, exampleBlurbAgain };
    }
  };
</script>