<template>
  <div id="app">
     <h1>Message Editor</h1>
    <message-editor></message-editor>
  </div>
</template>

<script>
import MessageEditor from "./components/MessageEditor";

export default {
  name: 'app',
  components: {
    MessageEditor
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
