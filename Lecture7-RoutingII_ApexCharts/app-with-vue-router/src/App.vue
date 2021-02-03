<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link :to="{ name: 'About', params: { user: 'Adam' } }">About</router-link> | -->
    <!-- <router-link :to="{ name: 'About' }">About</router-link> | -->
    <router-link :to="{ name: 'About', params: { user: 'Jane' } }">About</router-link> |
    <router-link :to="{ name: 'MessageFeed' }">Message Feed</router-link>
  </div>

  <div>
    <el-button type="success" @click="redirect">Redirect</el-button>
    <el-button type="success" @click="back">Back</el-button>
    <el-button type="success" @click="forward">Forward</el-button>
  </div>

  <router-view />
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    let user = "Adam";

    router.beforeEach((to, from, next) => {
      if (to.name === "About" && (!to.params || !to.params.user)) {
        next({ name: "About", params: { user } });
      } else {
        user = to.params.user;
        next();
      }
    });

    router.afterEach((to, from) => {
      console.log(from);

      if (to.name === "About" && to.params && to.params.user) {
        user = to.params.user;
      }
    });

    console.log(router);
    function redirect() {
      router.push({ name: "Home" });
    }

    function back() {
      router.go(-1);
    }

    function forward() {
      router.go(1);
    }

    return { redirect, back, forward };
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
</style>
