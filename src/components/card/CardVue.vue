<template>
    <top-line></top-line>
    <button @click="nextVue('/card/hphoto')">头像</button>
    <button @click="nextVue('/card/mood')">心情</button>
    <button @click="nextVue('/card/background')">背景</button>
    <button @click="nextVue('/card/send')">寄出</button>
    <router-view></router-view>
</template>
<script>

import TopLine from './TopLine.vue'



export default {
    components:{
        TopLine
    },
    mounted(){
    console.log('Card Mounted');
    this.$router.push('/card/hphoto')
  },
    methods:{
        nextVue(url){
            this.$router.push(url)
        }
    }
}
</script>
<style scoped>

</style>