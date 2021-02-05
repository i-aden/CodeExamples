<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'Messages' }">Messages</router-link>
  </div>

  <transition :name="transition" :mode="mode">
    <router-view />
  </transition>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const transition = ref("fade");
    const mode = ref("out-in");

    const router = useRouter();
    router.beforeEach(
      (
        to, // The destination route
        from, //The source route
        next //The function to trigger to resolve the hook
      ) => {
        transition.value = "fade";
        if (to.meta && to.meta.transition) {
          transition.value = to.meta.transition;
        }

        next();
      }
    );

    return { transition, mode };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

/**Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.4, 0.4, 0.4);
  }
  100% {
    opacity: 1;
  }
}
</style>
