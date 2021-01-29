<template>
  <h1>Words Beginning with the letter ...'{{ routeID }}'</h1>
  <p v-for="word in words" :key="word">{{ word }}</p>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    //console.log(route);

    const routeID = route.params.id;

    const A_words = [ "Alphabet", "Ant", "Apple" ];
    const B_words = [ "Ball", "Biscuit", "Brush" ];
    const C_words = [ "Cap", "Car", "Caterpillar" ];

    let words = [];
    if (routeID === "A") {
        words = A_words;
     }
     else if (routeID === "B") {
       words = B_words;
     }
     else if (routeID === "C") {
       words = C_words;
     }

    return { routeID, words };
  }

}
</script>

<style></style>
