<template>
  <div id="app">
    <EcoPal msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import EcoPal from './components/EcoPal.vue'

export default {
  name: 'App',
  components: {
    EcoPal
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
  margin-top: 60px;
}
</style>
