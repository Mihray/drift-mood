<template>
  <router-view></router-view>
  <!-- <save-hint v-if="hint" :hintPram2="hintPram2" :hintPram3="hintPram3"></save-hint> -->
</template>

<script>
// import SaveHint from './components/SaveHint.vue'


export default {
  name: 'App',
  // components: {
  //   SaveHint
  // },
  data(){
    return {
      // hint:false,
    }
  },
  mounted(){
    this.$router.push('/login')
  }
}
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center; */
  /*color: #2c3e50;
  margin-top: 60px; */
}
body{
  margin: 0;
  padding: 0;
}
</style>
