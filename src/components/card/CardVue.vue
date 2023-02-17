<template>
    <div class="BigCardBox">
        <top-line @nextStep="nextStep" @lastStep="lastStep"></top-line>
    <router-view @saveHint="saveHint1"></router-view>
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
            // avatarStyle:[], 
        }
    },
    created(){
        console.log('父组件的crerated，获取后端数据');
    const that = this;
    axios.get('/card/query', {
        headers: { token: localStorage.getItem('token')},
    }).then(res => {
        that.$store.commit('initCardPage', res.data);
        // console.log('Card Mounted');
        that.$router.push('/card/hphoto')

        // that.avatarStyle=that.$store.state.cardPage.avatarStyle
        // console.log(that.avatarStyle)
        // console.log(typeof(that.avatarStyle))
    })

    // 页面跳转需要在请求结束后，即then方法中。同时注意匿名函数（箭头函数）中this指向问题，需要用作用域外的this代替
    // console.log('Card Mounted');
    // this.$router.push('/card/hphoto')

    // this.avatarStyle=this.$store.state.cardPage.avatarStyle
    // console.log(this.avatarStyle)
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
        },
        saveHint1(pram11,pram22,pram33){
            console.log('pram11,pram22,pram33:'+pram11,pram22,pram33)
            this.$emit('SaveHint1',pram11,pram22,pram33)
            console.log('触发cardVue到APP的emit事件啦')
        }
    }
}
</script>
<style scoped>
.BigCardBox{
    box-sizing: border-box;
    /* padding-left: 11px;
    padding-right: 11px; */
    width: 370px;
    height: calc(100vh - 87px);
    overflow: auto;
    padding-bottom: 20px;
}
</style>