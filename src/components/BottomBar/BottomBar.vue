<template>
    <div class="bottom-bar">
        <button @click="bottomclick('/card')">卡片</button>
        <button @click="bottomclick('/explore')">探索</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            juPath:null
        }
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
.bottom-bar{
width: 390px;
height: 87px;
background: #f8f8f8;
box-shadow: 0px -0.5px 0px 0px rgba(0,0,0,0.30); 
backdrop-filter: blur(27.18px);
}
</style>