<template>
  <login-vue/>
</template>

<script>
import LoginVue from './components/LoginVue.vue'

export default {
  name: 'App',
  components: {
    LoginVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
