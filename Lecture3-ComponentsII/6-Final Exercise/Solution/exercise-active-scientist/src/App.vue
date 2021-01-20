<template>
  <div>
    <active-scientist
      :scientistName="scientist.name"
      :scientistAge="scientist.age"
    ></active-scientist>
    <ScientistData @set-data="setScientistData" />
  </div>
</template>

<script>
import { reactive } from "vue";
import ActiveScientist from "./components/ActiveScientist.vue";
import ScientistData from "./components/ScientistData.vue";

export default {
  components: { ActiveScientist, ScientistData },

  setup() {
    let scientist = reactive({
      name: "Albert Einstein",
      age: 26,
    });

    function setScientistData(name, age) {
      scientist.name = name;
      scientist.age = +age;
    }

    return { scientist, setScientistData };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
