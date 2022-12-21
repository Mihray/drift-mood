<template>
    <div class="choiseBackground">
        <span>点击按钮换张背景</span>
        <div class="choiseBackground-BackgroundBox" >
            <!-- :style="{'background-image':'url(backgroundImage)'}" -->
            <div class="circle" @click="changeBackground">
                <img src="../../../assets/2.生成心情页-选择头像/likecopy.png" />
            </div>
        </div>
        <span>心情卡片预览</span>
        <div class="choiseBackground-preview">
            <div class="choiseBackground-preview-firstLine">
                <div class="HeadPhoto"></div>
                <span class="name">{{$store.state.name}}</span>
                <span class="Mood">{{$store.state.Moodcard.choisedMood.name}}</span>
            </div>
            <div class="choisedMood_say">{{$store.state.Moodcard.choisedMood_say}}</div>
            <div class="date">{{BackgDate}}</div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            backgroundImage: require('../../../assets/background01.jpg'),
            BackgDate:''
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
    },
    methods:{
        changeBackground(){
            console.log('准备换背景了')
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
    background-image: url(../../../assets/background01.jpg);
    margin-top: 25px;
}
.choiseBackground-BackgroundBox{
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.choiseBackground-preview-firstLine{
    margin-top: 10px;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width: 343px;
}
.HeadPhoto{
    width: 45px;
    height: 45px;
    /* border-radius:38px; */
    /* background-image: ; */
    background: #ff62a5;
}
.name{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 32px;
    letter-spacing: 0.16px;
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
    height: 135px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    letter-spacing: 1px;
    margin-top: 10px;
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
}
</style>