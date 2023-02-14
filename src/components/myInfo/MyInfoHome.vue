<template>
    <div class="MySInfo">
        <div class="bgColor"></div>
        <div class="MySInfo-headBox-big"> 
            <div class="MySInfo-headBox">
                <div class="MySInfo-headBox-firstLine">
                    <div class="heatPh" :style="{'backgroundImage':'url('+userInfo.avatarImage+')'}"></div>
                    <div class="MySInfo-headBox-firstLine-span"> 
                        <span>{{ userInfo.nickName }}</span>
                        <span>来到漂流心情已经<span>{{userInfo.dayCount}}</span>天了</span>
                    </div>
                </div>
                <span>记录了<span>{{ userInfo.recordCount }}</span>次心情，并向大家寄出了<span>{{ userInfo.shareCount }}</span>次</span>
                <span>收藏<span>{{ userInfo.collectCount }}</span>张心情卡片。分享快乐，分担苦恼</span>
            </div>
        </div>
        <div class="StatMood">
            <span>最多的心情Top3</span>
            <div class="barChart"> 
                <div class="barChart-firstBar">
                    <span>{{ topMood.first.count }}次</span>
                    <div :style="{height:topMood.first.count*6+'px'}"></div>
                </div>
                <div class="barChart-twoBar"> 
                    <span>{{ topMood.second.count }}次</span>
                    <div :style="{height:topMood.second.count*6+'px'}"></div>
                </div>
                <div class="barChart-lasttBar"> 
                    <span>{{ topMood.third.count }}次</span>
                    <div :style="{height:topMood.third.count*6+'px'}"></div>
                </div>
            </div>
            <div class="StatMood-MoodSpan"> 
                <img :src="topMood.first.moodImage">
                <img :src="topMood.second.moodImage">
                <img :src="topMood.third.moodImage">
                <!-- <span>愤怒</span>
                <span>开心</span>
                <span>平静</span> -->
            </div>
        </div>
        <div class="history-Mood"> 
                <div class="history-Mood-group" v-for="item in $store.state.allMoodcardGather" :key="item"> 
                    <div class="history-Mood-group-firstLine"> 
                        <div class="history-Mood-group-firstLine-circle"></div>
                        <span class="history-Mood-group-firstLine-date">{{item.Mooddate}}</span>
                    </div>
                    <div class="history-Mood-group-lineBox"> 
                        <div class="history-Mood-group-lineBox-MoodCard">
                            <div class="history-Mood-group-lineBox-MoodCard-firstLine">
                                <div  :class="{HeadPhoto1:item.choisedHPShapeSquare,HeadPhoto2:item.choisedHPShapeCircle}"></div>
                                <span class="name">{{$store.state.name}}</span>
                                <span class="Mood">{{item.Mooddate.name}}</span>
                            </div>
                            <div class="history-Mood-group-lineBox-MoodCard_say">{{item.choisedMood_say}}</div>
                            <div class="date">{{item.Mooddate}}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="history-Mood-group"> 
                    <div class="history-Mood-group-firstLine"> 
                        <div class="history-Mood-group-firstLine-circle"></div>
                        <span class="history-Mood-group-firstLine-date">2022年12月27日</span>
                    </div>
                    <div class="history-Mood-group-lineBox"> 
                        <div class="history-Mood-group-lineBox-MoodCard"></div>
                        <div class="history-Mood-group-lineBox-MoodCard"></div>
                        <div class="history-Mood-group-lineBox-MoodCard"></div>
                        <div class="history-Mood-group-lineBox-MoodCard"></div>
                    </div>
                </div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            // classHeadPhoValue:[false,true]
            cardList:undefined,
            topMood:undefined,
            userInfo:undefined,
        }
    },
    updated(){
        console.log('更新',this.$store.state.allMoodcardGather)
    },
    beforeCreate(){
        axios.get('/mine/query',{
            headers:{token: localStorage.getItem('token')}
        }).then(res=>{
            console.log(res.data)
            this.cardList=res.data.cardList;
            this.topMood=res.data.topMood;
            this.userInfo=res.data.userInfo
            console.log('userInfo：')
            console.log(this.userInfo)
        })
    }
}
</script>
<style scoped>
.MySInfo{
    width: 390px;
    box-sizing: border-box;
    height: calc(100vh - 87px);
    overflow: auto;
    padding-bottom: 20px;
    background: #f2f2f2;

    /* display: flex;
    flex-direction: column;
    align-items: center; */
}
.bgColor{
    width: 390px;
    height: 173px;
    background: linear-gradient(73deg,#ff62a5 0%, #ff8960 100%);
}
.MySInfo-headBox-big{
    display: flex;
    width: 390px;
    height: 172px;
    margin-top: -100px;
    justify-content: center;
    align-items: center;
}
.MySInfo-headBox{
    width: 342px;
    height: 172px;
    background: #ffffff;
    border-radius: 16px;
    /* margin-top: -100px; */
    display: flex;
    flex-direction: column;
}
.MySInfo-headBox-firstLine{
    margin-bottom: 15px;
    display: flex;
}
.heatPh{
    width: 72px;
    height: 72px;
    border-radius: 16px;
    /* background-color: #d5b1e5; */
    margin-right: 20px;
    margin-left: 18px;
    margin-top: 20px;
    background-size: 100% 100%;
}
.MySInfo-headBox-firstLine-span{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}
.MySInfo-headBox-firstLine-span span:first-child{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #000000;
    line-height: 32px;
    letter-spacing: 0.16px;
    margin-bottom: 10px;
}
.MySInfo-headBox-firstLine-span span:last-child{
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #989898;
    line-height: 14px;
    letter-spacing: 0.07px;
}
.MySInfo-headBox>span{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #989898;
    line-height: 14px;
}
.StatMood{
    width: 100vw;
    /* background-color: #ae929e; */
    height: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

}
.StatMood>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #d14875;
}
.StatMood-MoodSpan{
    width: 250px;
    display: flex;
    justify-content: center;
}
.StatMood-MoodSpan>img{
    /* font-size: 20px; */
    margin-right: 20px; 
    width: 40px;
    height: 40px;
}
.barChart{
    width: 280px;
    height: 100px;
    border-bottom: 2px solid #f6d1c4;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.barChart>div{
    margin-right: 20px;
    display: flex;
    flex-direction: column;
}
.barChart>div>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ff6a36;
    line-height: 20px;
    letter-spacing: 0.1px;
}
.barChart>div>div{
    width: 40px;
    /* height: 60px; */
    background: #ff8960;
    border-radius: 4px 4px 0px 0px;
}
.history-Mood{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.history-Mood-group{
    box-sizing: border-box;
    /* margin-left: 10px;
    width: 340px; */
    margin-top: 20px;
}
.history-Mood-group-firstLine{
    display: flex;
}
.history-Mood-group-firstLine-circle{
    width: 10px;
    height: 10px;
    background: #d5b1e5;
    border-radius: 50%;
}
.history-Mood-group-firstLine-date{
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #e4caf0;
    line-height: 14px;
    letter-spacing: 0.07px;
    margin-left: 7px;
}
.history-Mood-group-lineBox{
    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #d5b1e5;
    margin-left: 2.5px;
    margin-top: 10px;
}
.history-Mood-group-lineBox-MoodCard{
    width: 343px;
    height: 193px;
    border-radius: 21px;
    background-color: #5b1b36;
    margin-top: 10px;
}

.history-Mood-group-lineBox-MoodCard-firstLine{
    margin-top: 10px;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width: 343px;
}
.HeadPhoto1{
    width: 45px;
    height: 45px;
    border-radius:10px;
    /* background-image: ; */
    background: #ff62a5;
}
.HeadPhoto2{
    width: 45px;
    height: 45px;
    border-radius:50%;
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
.history-Mood-group-lineBox-MoodCard_say{
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