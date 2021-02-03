<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Line'}">Line</router-link> |
    <router-link :to="{ name: 'Bar'}">Bar</router-link> |
    <router-link :to="{ name: 'Doughnut'}">Doughnut</router-link> |
    <router-link :to="{ name: 'Pie'}">Pie</router-link> |
    <router-link :to="{ name: 'Radar'}">Radar</router-link> |
    <router-link :to="{ name: 'RadialBar'}">RadialBar</router-link> |
    <router-link :to="{ name: 'PolarArea'}">Polar Area</router-link> |
    <router-link :to="{ name: 'Bubble'}">Bubble</router-link> |
    <router-link :to="{ name: 'Scatter'}">Scatter</router-link> |
    <router-link :to="{ name: 'HeatMap'}">HeatMap</router-link> |
    <router-link :to="{ name: 'TreeMap'}">TreeMap</router-link> 
  </div>
  <router-view/>
</template>

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
