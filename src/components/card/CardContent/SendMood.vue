<template>
    <div class="sendMood">
        <div class="sendMood-Moodcard"> 
            <div class="choiseBackground-preview-firstLine">
                <div class="HeadPhoto"></div>
                <span class="name">{{$store.state.name}}</span>
                <span class="Mood">{{$store.state.Moodcard.choisedMood.name}}</span>
            </div>
            <div class="choisedMood_say">{{$store.state.Moodcard.choisedMood_say}}</div>
            <div class="date">{{SendMoodDate}}</div>
        </div>
        <div class="sendMood-img">
            <div class="seve" @click="MySave">
                <div></div>
                <span>私人保存</span>
            </div>
            <div class="send" @click="sendCard">
                <div></div>
                <span>去漂流</span>
            </div>
        </div>
        <div class="sendMood-aid">
            <span>心情小助理</span>
            <div class="letter">
                今天的心情不太好哦，为你推荐一首「Purple Passion」。点击下方的按钮播放，平复一下不安的情绪吧^_^
            </div>
            <div class="player">
                <span>Purple Passion</span>
                <img src="../../../assets/5.生成心情页-寄出卡片/Video.png" @click="play">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            SendMoodDate:''
          }
    },
    created(){
        this.$store.commit('getDate')
        this.SendMoodDate=this.$store.state.date
    },
    methods:{
        MySave(){
            console.log('保存')
        },
        sendCard(){
            console.log('寄出');
        },
        play(){
            console.log('播放');
        }
    }
}
</script>
<style scoped>
.sendMood{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
}
.sendMood-Moodcard{
    width: 343px;
    height: 193px;
    border-radius: 21px;
    background-image: url(../../../assets/background01.jpg);
    margin-top: 25px;
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
.sendMood-img{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.sendMood-img div>div{
    width: 77px;
    height: 74px;
    border: 0.5px dashed rgb(52, 50, 50);
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 10px;
}
.seve{
    text-align: center;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #407ef5;
    line-height: 20px;
    letter-spacing: 2px;
}
.send{
    text-align: center;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #f15471;
    line-height: 20px;
    letter-spacing: 2px;
}
.seve div{
    background-image:url(../../../assets/5.生成心情页-寄出卡片/icons_like\ copy.png);
}
.send div{
    background-image: url(../../../assets/5.生成心情页-寄出卡片/icons_tabbar_discover\ copy.png);
}
.sendMood-aid{
    width: 343px;
    height: 258px;
    background: #f5f5f5;
    border-radius: 21px;
    margin-top: 10px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #d14875;
    letter-spacing: 0.1px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sendMood-aid span{
    margin-top: 10px;
}
.letter{
    margin: 20px;
}
.player{
    width: 289px;
    height: 54px;
    background: #d5d3d3;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.player span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-top: -5px;
    margin-left: 10px;
}
.player img{
    width: 36px;
    height: 36px;
    border-radius: 12px;
    margin-right: 15px;
}
</style>