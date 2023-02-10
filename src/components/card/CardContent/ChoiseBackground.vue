<template>
    <div class="choiseBackground">
        <span>点击按钮换张背景</span>
        <div class="choiseBackground-BackgroundBox" :style="{'backgroundImage':'url('+backgroundImage+')'}">
            <!-- :style="{'background-image':'url(backgroundImage)'}" -->
            <div class="circle" @click="changeBackground">
                <img src="../../../assets/2.生成心情页-选择头像/likecopy.png" />
            </div>
        </div>
        <span>心情卡片预览</span>
        <div class="choiseBackground-preview" :style="{'backgroundImage':'url('+backgroundImage+')'}">
            <div class="mask"></div>
            <div class="choiseBackground-preview-firstLine">
                <div :class="{HeadPhoto1: classValue[0],HeadPhoto2:classValue[1]}"></div>
                <span class="name">UserName</span>
                <!-- <span class="Mood">{{$store.state.Moodcard.choisedMood.name}}</span> -->
                <img src="https://pic.imgdb.cn/item/63d7d248face21e9ef7eed9e.png">
            </div>
            <div class="choisedMood_say">这里是用于预览的静态文本，仅背景图片会动，其余不变。</div>
            <div class="date">{{BackgDate}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            backgroundImage: this.$store.state.cardPage.defaultBackground.url,
            BackgDate:'',
            classValue:[false,true]

        }
    },
    mounted(){
        // const adate=new Date()
        // // const year=adate.getFullYear()
        // const Month=adate.getMonth()+1
        // this.date=(adate.getFullYear()+'-'+Month+'-'+adate.getDate()+' '+adate.getHours()+':'+adate.getMinutes())
        // console.log('时间：'+this.date)
        this.$store.commit('getDate')
        this.BackgDate=this.$store.state.date
        if(this.$store.state.Moodcard.choisedShape==='圆形'){
            this.classValue[1]=true;
            this.classValue[0]=false;
        }
        if(this.$store.state.Moodcard.choisedShape==='圆角矩形'){
            this.classValue[0]=true;
            this.classValue[1]=false;
        }
    },
    methods:{
        changeBackground(){
            console.log('准备换背景了')
            axios.get('/card/refreshBackground',{
                headers: { token: localStorage.getItem('token')}   
            }).then((res)=>{
                console.log('res:');
                console.log(res.data);
                this.backgroundImage=res.data.background.url
                this.$store.state.Moodcard.choisedBackgroundUrl=this.backgroundImage
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
.choiseBackground{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
}
.choiseBackground>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 20px;
    letter-spacing: 1px;
    margin-top: 32px;
}
.choiseBackground>div{
    width: 343px;
    height: 200px;
    border-radius: 21px;
    /* background-image: url(../../../assets/background01.jpg); */
    margin-top: 25px;
}
.choiseBackground-BackgroundBox{
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;
}
.circle{
    width: 80px;
    height: 40px;
    background: rgba(255,255,255,0.80);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.choiseBackground-preview{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    background-size: 100% 100%;
}
.choiseBackground-preview-firstLine{
    margin-top: -180px;
    z-index: 1;
    position: relative;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width: 343px;
    margin-bottom: 10px;
}
.HeadPhoto1{
    width: 45px;
    height: 45px;
    border-radius:10px;
    /* background-image: ; */
    /* background: #ff62a5; */
    background-image: url(https://pic.imgdb.cn/item/63d7e485face21e9efaa377c.webp);
    background-size: 100% 100%;
}
.HeadPhoto2{
    width: 45px;
    height: 45px;
    border-radius:50%;
    /* background-image: ; */
    /* background: #ff62a5; */
    background-image: url(https://pic.imgdb.cn/item/63d7e485face21e9efaa377c.webp);
    background-size: 100% 100%;
}
.name{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 32px;
    letter-spacing: 0.16px;
    margin-right: 40px;
}
.Mood{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 32px;
    letter-spacing: 0.16px;
}
.choisedMood_say{
    width: 300px;
    height: 100px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    letter-spacing: 1px;
    /* margin-top: 10px; */
    z-index: 1;
    position: relative;
    margin: auto;
}
.date{
    width: 150px;
    height: 20px;
    margin-left: 170px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 0.08px;
    z-index: 1;
    position: relative;
}
.mask{
    background-color: #ffffff;
    opacity: 0.4;
    width: 343px;
    height: 200px;
}
.choiseBackground-preview-firstLine>img{
    width: 50px;
    height: 50px;
}
</style>