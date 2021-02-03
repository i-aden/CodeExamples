<template>
  <div class="about">
    <h1>About {{ $route.params.user }}</h1>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    console.log(route);

    //return { route };
  },
};
</script>
