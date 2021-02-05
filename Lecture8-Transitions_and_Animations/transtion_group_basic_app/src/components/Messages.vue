

<template>
<button @click="show=!show">Toggle</button>
<transition-group name="fade">
    <p v-for="message in messages" :key="message" v-show="show">
        {{message}}
    </p>
</transition-group>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const messages = ref([
            "Message 1",
            "Message 2",
            "Message 3"
        ]);

        const show = ref(true);

        return { messages, show };
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 2s;
}

.fade-enter-from, .fade-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
</style>