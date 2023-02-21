<template>
    <div class="favorites">
        <div class="img">
            <div class="favorites-title">
                <span>收藏</span>
                <span>常记起的故事</span>
            </div>
            <div class="favorites-Mood"> 
                <div class="favorites-Mood-group" v-for="item in favoriteMoodList" :key="item"> 
                    <div class="favorites-Mood-group-firstLine"> 
                        <div class="favorites-Mood-group-firstLine-circle"></div>
                        <span class="favorites-Mood-group-firstLine-date">{{ item.newDate }}</span>
                    </div>
                    <div class="favorites-Mood-group-lineBox"> 
                        <div class="favorites-Mood-group-lineBox-MoodCard" v-for="item2 in item.cardList" :key="item2" :style="{'backgroundImage':'url('+item2.backgroundImage
+')'}">
                            <div class="mask"></div>
                            <div class="history-Mood-group-lineBox-MoodCard-firstLine">
                                <div  :class="{HeadPhoto1:item2.HeadPhotoShape1,HeadPhoto2:item2.HeadPhotoShape2}" :style="{'backgroundImage':'url('+item2.avatarImage+')'}"></div>
                                <span class="name">{{item2.nickName}}</span>
                                <!-- <span class="Mood">{{item.Mooddate.name}}</span> -->
                                <img :src="item2.moodImage">
                            </div>
                            <div class="history-Mood-group-lineBox-MoodCard_say">{{item2.cardMessage}}</div>
                            <div class="date">{{item2.cardNewTime}}</div> 
                        </div>
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            favoriteMoodList:undefined,

            HeadPhotoShape1:Boolean,
            HeadPhotoShape2:Boolean,
        }
    },
    created(){
        axios.get('/collection/query',
                    { 
                        headers:{token: localStorage.getItem('token')}
                    }).then(res=>{
                                console.log(res.data);
                                console.log('收藏页create');

                                const cardlist=res.data.cardListGroupByDate;
                                cardlist.forEach(item => {
                                    item.newDate=item.date.slice(0,4)+'年'+item.date.slice(4,6)+'月'+item.date.slice(6,8)+'日'
                                    item.cardList.forEach(item2=>{
                                        if(item2.avatarShape==='circle'){
                                            item2.HeadPhotoShape2=true
                                            item2.HeadPhotoShape1=false
                                        }else if(item2.avatarShape==='rectangle'){
                                            item2.HeadPhotoShape2=false
                                            item2.HeadPhotoShape1=true
                                        }
                                        function Minutes(Minutes){
                                            if(Number(Minutes.getMinutes())<10){
                                                return '0'+Minutes.getMinutes()
                                            }else{
                                                return Minutes.getMinutes()
                                            }}
                                        item2.cardNewTime=(new Date(item2.cardTime)).getFullYear()+'年'+(Number((new Date(item2.cardTime)).getMonth())+1)+'月'+(new Date(item2.cardTime)).getDate()+'日'+(new Date(item2.cardTime)).getHours()+':'+Minutes((new Date(item2.cardTime)))

                                    })
                                }); 
                                this.favoriteMoodList=cardlist   

                    }).catch(err=>{console.log(err);})
    }
}
</script>
<style scoped>
.favorites{
    width: 390px;
    box-sizing: border-box;
    height: calc(100vh - 87px);
    overflow: auto;
    /* padding-bottom: 20px; */
    background: linear-gradient( #9648f2, #ff61a3  );
    /* background-image: url(../../assets/切图和组件样式等/收藏页顶部横幅.png); */
}
.img{
    width: 390px;
    box-sizing: border-box;
    height: calc(100vh - 87px);
    overflow: auto;
    background-image: url(../../assets/切图和组件样式等/收藏页顶部横幅.png);
    background-repeat: no-repeat;
    background-position: top;
    padding-bottom: 20px;
}
.favorites-title{
    margin-top: 40px;
    margin-left: 20px;
}
.favorites-title span:first-child{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
    letter-spacing: 0.16px;
}
.favorites-title span:last-child{
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #ffffff;
    line-height: 14px;
    letter-spacing: 0.07px;
    margin-left: 11px;
}
.favorites-Mood{
    display: flex;
    flex-direction: column;
}
.favorites-Mood-group{
    box-sizing: border-box;
    margin-left: 10px;
    width: 340px;
    margin-top: 20px;
}
.favorites-Mood-group-firstLine{
    display: flex;
}
.favorites-Mood-group-firstLine-circle{
    width: 10px;
    height: 10px;
    background: #d5b1e5;
    border-radius: 50%;
}
.favorites-Mood-group-firstLine-date{
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #e4caf0;
    line-height: 14px;
    letter-spacing: 0.07px;
    margin-left: 7px;
}
.favorites-Mood-group-lineBox{
    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #d5b1e5;
    margin-left: 2.5px;
    margin-top: 10px;
}
.favorites-Mood-group-lineBox-MoodCard{
    width: 343px;
    height: 193px;
    border-radius: 21px;
    background-color: #5b1b36;
    margin-top: 10px;
    background-size: 100% 100%;
}

.history-Mood-group-lineBox-MoodCard{
    width: 343px;
    height: 193px;
    border-radius: 21px;
    background-color: #f0d3df;
    margin-top: 10px;
    background-size:100% 100%;
}

.history-Mood-group-lineBox-MoodCard-firstLine{
    margin-top: -180px;
    z-index: 1;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width: 343px;
}
.HeadPhoto1{
    width: 55px;
    height: 55px;
    border-radius:10px;
    /* background-image: ; */
    background: #ff62a5;
    background-size: 100% 100%;
}
.HeadPhoto2{
    width: 55px;
    height: 55px;
    border-radius:50%;
    /* background-image: ; */
    background: #ff62a5;
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
    height: 90px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    letter-spacing: 1px;
    margin-top: 10px;
    z-index: 1;
    position: relative;
    margin: auto;
}
.date{
    /* width: 150px; */
    height: 20px;
    margin-left: 170px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.mask{
    background-color: #ffffff;
    opacity: 0.4;
    width: 343px;
    height: 193px;
    border-radius: 21px;
}
.history-Mood-group-lineBox-MoodCard-firstLine>img{
    width: 50px;
    height: 50px;
}
</style>