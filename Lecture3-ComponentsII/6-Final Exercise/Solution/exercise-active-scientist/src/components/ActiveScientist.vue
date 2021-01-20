<template>
  <section>
    <h2>{{ scientistName }}</h2>
    <h3>{{ scientistAge }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    scientistName: {
      type: String,
      required: true
    },
    scientistAge: {
      type: Number,
      required: true
    }
  }
};
</script>
