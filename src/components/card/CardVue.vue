<template>
    <div class="BigCardBox">
        <top-line @nextStep="nextStep"></top-line>
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