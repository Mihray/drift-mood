<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
   
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
