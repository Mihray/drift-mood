<template>
    <div class="bottom-bar">
        <div  class="card" @click="bottomclick('/card')"></div>
        <div class="explore" @click="bottomclick('/explore')"></div>
        <div class="Favorites" @click="bottomclick('/Favorites')"></div>
        <div class="MyInfo" @click="bottomclick('/MyInfo')"></div>
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
display: flex;
flex-wrap: nowrap;
}
.bottom-bar>div{
    width: 38px;
    height: 65px;
    flex-grow: 1;
    background-repeat:no-repeat;
    background-position:center;
}
.card{
    background-image: url(../../assets/2.生成心情页-选择头像/icons_tabbar_discover-active.png);
}
.explore{
    background-image: url(../../assets/2.生成心情页-选择头像/Neaby.png);
}
.Favorites{
    background-image: url(../../assets/2.生成心情页-选择头像/Favorite.png);
}
.MyInfo{
    background-image: url(../../assets/2.生成心情页-选择头像/Profile.png);
}
</style>