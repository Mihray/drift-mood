<template>
    <div class="BigCardBox">
        <top-line @nextStep="nextStep"></top-line>
        <button @click="nextVue('/card/hphoto')">头像</button>
        <button @click="nextVue('/card/mood')">心情</button>
        <button @click="nextVue('/card/background')">背景</button>
        <button @click="nextVue('/card/send')">寄出</button>
        <router-view></router-view>
    </div>
</template>
<script>

import TopLine from './TopLine.vue'



export default {
    components:{
        TopLine
    },
    data(){
        return{
            
        }
    },
    mounted(){
    console.log('Card Mounted');
    this.$router.push('/card/hphoto')
  },
  updated(){
    this.$store.state.cardnowIp=this.$route.path
  },
    methods:{
        nextVue(url){
            this.$router.push(url)
        },
        nextStep(param){
            console.log('下一步点击成功了')
            this.$router.push(param)
        }
    }
}
</script>
<style scoped>
.BigCardBox{
    padding-left: 11px;
    padding-right: 11px;
}
</style>