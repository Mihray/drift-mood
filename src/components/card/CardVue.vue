<template>
    <div class="BigCardBox">
        <top-line @nextStep="nextStep" @lastStep="lastStep"></top-line>
    <router-view></router-view>
    </div>
</template>
<script>

import TopLine from './TopLine.vue'
import axios from 'axios'

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
            axios.get('/mtapi/mihray/randomWeather')
                 .then(res=>{
                    console.log(res.data)
                 })
                 .catch(err=>{console.log(err)})
            this.$store.commit('MoodcardShow')
        },
        lastStep(param2){
            console.log('上一步点击成功')
            this.$router.push(param2)
        }
    }
}
</script>
<style scoped>
.BigCardBox{
    box-sizing: border-box;
    /* padding-left: 11px;
    padding-right: 11px; */
    /* width: 390px; */
    height: calc(100vh - 87px);
    overflow: auto;
    padding-bottom: 20px;
}
</style>