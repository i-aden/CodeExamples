<template>
  <h1>{{ exampleBlurb.title }}</h1>
  <h3>{{ exampleBlurbAgain.title }}</h3>
</template>

<script>
  import { reactive } from "vue";

  export default {
    setup() {
      const exampleBlurb = reactive({
        title: "Reactive Object -- Changing in 3, 2, 1 ..."
      });

      setTimeout(() => {
        exampleBlurb.title = "Title Changed because my containing object is REACTIVE!!!";
      }, 3000);

      const exampleBlurbAgain = {
        title: "This blurb will STAY the same because the containing object is NOT reactive!"
      };

      setTimeout(() => {
        exampleBlurbAgain.title = "This should never be shown!!!";
      }, 3000);

      return { exampleBlurb, exampleBlurbAgain };
    }
  };
</script>