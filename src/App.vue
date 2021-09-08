<template>
  <div id="app">
    <img alt="Vue logo"
src="./assets/logo.png"
/>
    <button @click="changeTs">
ts页面
</button>
    <HelloWorld v-if="!isTs" msg="Welcome to Your Vue.js App" />
    <hello-world-2 v-else />
  </div>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import HelloWorld2 from './pages/pages-ts/hello-world.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2
  },
  data() {
    return {
      isTs: false
    }
  },
  methods: {
    changeTs() {
      this.isTs = !this.isTs
    }
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
