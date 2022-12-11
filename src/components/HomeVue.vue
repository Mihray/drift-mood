<template>
    <router-view></router-view>
    <bottom-bar></bottom-bar>
    <button @click="bottomclick('/card')">卡片</button>
    <button @click="bottomclick('/explore')">探索</button>
</template>
<script>
import BottomBar from './BottomBar/BottomBar.vue';

export default {
    components: {BottomBar },
    data(){
        return{
            juPath:null
        }
    },
    mounted(){
    this.$router.push('/card')
  },
    methods:{
        bottomclick(url){
            console.log(this.$route)
            const path = this.$route.path
            // path '/card/a' '/card/b' '/explore'
            // 判断一下 url 和path的前面一部分是不是一致
            // 所以第一步：要获取path前面这一部分字符串
            path.indexOf("/")
            if(path.lastIndexOf("/")===0){
                this.juPath=path;
                console.log(this.juPath)
            }
            if(path.lastIndexOf("/")!==0){
                this.juPath=path.slice(0,path.lastIndexOf("/"))
                console.log(this.juPath)
            }

            if(this.juPath===url){
                console.log('if');
                return;
            }
            this.$router.push(url)
        }
    }
}
</script>
<style scoped>

</style>