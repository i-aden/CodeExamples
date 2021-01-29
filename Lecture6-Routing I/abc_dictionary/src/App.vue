<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Alphabet' }">Letters of the Alphabet</router-link>
  </div>

  <div>
  <el-button type="danger" @click="redirect">Redirect</el-button>
  <el-button type="danger" @click="back">Back</el-button>
  <el-button type="danger" @click="forward">Forward</el-button>
  </div>

  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

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
  }
}
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
