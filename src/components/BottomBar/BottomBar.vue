<template>
    <div class="bottom-bar">
        <div v-for="item in classArr" :key="item"  @click="bottomclick(item.routerId,item.id)">
            <img  :src="item.background_image">
            <span>{{ item.name }}</span>
        </div>
        <!-- <div class="explore" @click="bottomclick('/explore')"></div>
        <div class="Favorites" @click="bottomclick('/Favorites')"></div>
        <div class="MyInfo" @click="bottomclick('/MyInfo')"></div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            juPath:null,
            classArr:[
                {id:0,name:'卡片',routerId:'/card',classValue:false,class1:'card',class2:'card1',background_image:require('../../assets/切图和组件样式等/底栏卡片-选中态.png')},
                {id:1,name:'搜索',routerId:'/explore',classValue:false,class1:'explore',class2:'explore1',background_image:require('../../assets/切图和组件样式等/底栏探索-未选中.png')},
                {id:2,name:'收藏',routerId:'/Favorites',classValue:false,class1:'Favorites',class2:'Favorites1',background_image:require('../../assets/切图和组件样式等/底栏收藏-未选中.png')},
                {id:3,name:'我的',routerId:'/MyInfo',classValue:false,class1:'MyInfo',class2:'MyInfo1',background_image:require('../../assets/切图和组件样式等/底栏我的-未选中.png')}
            ]
        }
    },
    methods:{
        bottomclick(url,id){
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
                // console.log('if');
                return;
            }
            this.$router.push(url)
            if(id===0){
                this.classArr[0].background_image=require('../../assets/切图和组件样式等/底栏卡片-选中态.png')
                this.classArr[1].background_image=require('../../assets/切图和组件样式等/底栏探索-未选中.png')
                this.classArr[2].background_image=require('../../assets/切图和组件样式等/底栏收藏-未选中.png')
                this.classArr[3].background_image=require('../../assets/切图和组件样式等/底栏我的-未选中.png')
            }
            if(id===1){
                this.classArr[0].background_image=require('./../../assets/切图和组件样式等/底栏卡片-未选中.png')
                this.classArr[1].background_image=require('../../assets/切图和组件样式等/底栏探索-选中态.png')
                this.classArr[2].background_image=require('../../assets/切图和组件样式等/底栏收藏-未选中.png')
                this.classArr[3].background_image=require('../../assets/切图和组件样式等/底栏我的-未选中.png')
            }
            if(id===2){
                this.classArr[0].background_image=require('./../../assets/切图和组件样式等/底栏卡片-未选中.png')
                this.classArr[1].background_image=require('../../assets/切图和组件样式等/底栏探索-未选中.png')
                this.classArr[2].background_image=require('../../assets/切图和组件样式等/底栏收藏-选中态.png')
                this.classArr[3].background_image=require('../../assets/切图和组件样式等/底栏我的-未选中.png')
            }
            if(id===3){
                this.classArr[0].background_image=require('./../../assets/切图和组件样式等/底栏卡片-未选中.png')
                this.classArr[1].background_image=require('../../assets/切图和组件样式等/底栏探索-未选中.png')
                this.classArr[2].background_image=require('../../assets/切图和组件样式等/底栏收藏-未选中.png')
                this.classArr[3].background_image=require('../../assets/切图和组件样式等/底栏我的-选中态.png')
            }
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

    position: absolute;
    bottom: 0;
}
.bottom-bar>div{
    width: 38px;
    height: 65px;
    flex-grow: 1;
    background-repeat:no-repeat;
    background-position:center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.bottom-bar>div img{
    width: 41px;
    height: 65px;
    margin-bottom: 15px;
    margin-top: 25px;
}
.bottom-bar>div span{
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #8f8892;
    line-height: 16px;
    letter-spacing: 0.08px;
}
</style>