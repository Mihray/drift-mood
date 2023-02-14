<template>
    <div class="sendMood">
        <div class="sendMood-Moodcard" :style="{'backgroundImage':'url('+sendMoodcard.choisedBackgroundUrl+')'}"> 
            <div class="mask"></div>
            <div class="choiseBackground-preview-firstLine">
                <div  :class="{HeadPhoto1:classHeadPhoValue[0],HeadPhoto2: classHeadPhoValue[1]}" :style="{'backgroundImage':'url('+sendMoodcard.choisedHeadPhotoUrl+')'}"></div>
                <span class="name">{{$store.state.name}}</span>
                <!-- <span class="Mood">{{$store.state.Moodcard.choisedMood.name}}</span> -->
                <img :src="sendMoodcard.choisedMoodUrl">
            </div>
            <div class="choisedMood_say">{{sendMoodcard.choisedMood_say}}</div>
            <div class="date">{{SendMoodDate}}</div>
        </div>
        <div class="sendMood-img">
            <div class="seve" @click="save('privateSave')">
                <div></div>
                <span>私人保存</span>
            </div>
            <div class="send" @click="save('publicSave')">
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
import axios from 'axios'
export default {
    components:{
       
    },
    data(){
        return{
            SendMoodDate:'',
            classHeadPhoValue:[false,true],
            sendMoodcard:{},
            savaHintShow:false
          }
    },
    created(){
        this.sendMoodcard=this.$store.state.Moodcard
        this.$store.commit('getDate')
        this.SendMoodDate=this.$store.state.date;
        this.$store.state.Moodcard.Mooddate=this.SendMoodDate
        if(this.$store.state.Moodcard.choisedShape==='圆形'){
            this.classHeadPhoValue[1]=true;
            this.classHeadPhoValue[0]=false;

        }
        if(this.$store.state.Moodcard.choisedShape==='圆角矩形'){
            this.classHeadPhoValue[0]=true;
            this.classHeadPhoValue[1]=false;
        }
    },
    methods:{
        // MySave(){
        //     console.log('保存')
        //     this.$store.commit('pushMood')
        //     // this.$store.state.PrivateMoodcardGather.push(this.$store.state.Moodcard)
        //     // this.$store.state.allMoodcardGather.push(this.$store.state.Moodcard)
        //     console.log(this.$store.state.PrivateMoodcardGather)
        //     this.savaHintShow=true

        //     // this.$router.push('/card/hphoto')
        //     // this.$store.state.Moodcard.choisedStyle='',
        //     // this.$store.state.Moodcard.choisedShape=''

        //     console.log('更新',this.$store.state.allMoodcardGather)
        // },
        // sendCard(){
        //     console.log('寄出');
        //     // this.$store.state.publicMoodcardGather.push(this.$store.state.Moodcard)
        //     // this.$store.state.allMoodcardGather.push(this.$store.state.Moodcard)
        //     console.log(this.$store.state.publicMoodcardGather)
        //     this.$router.push('/card/hphoto')
        //     // this.$store.state.Moodcard.choisedStyle='',
        //     // this.$store.state.Moodcard.choisedShape='',
        //     // this.$store.state.Moodcard.choisedMood_say=''
        // },

        save(saveType){
            axios.post('/card/completeCard',{
            action:saveType,
            mood:this.sendMoodcard.choisedMoodId,
            avatarShape:this.sendMoodcard.choisedShapeId,
            background:this.sendMoodcard.choisedBackgroundUrl,
            avatar:this.sendMoodcard.choisedHeadPhotoUrl,
            message:this.sendMoodcard.choisedMood_say,
            currentTime:this.sendMoodcard.MoodDateOriginal,
            },{ 
                headers:{token: localStorage.getItem('token')}
            }).then(res=>{
                console.log(res);
            if(saveType==='privateSave') {
                    if(res.data.result==='success')
                    console.log('res.data.result:'+res.data.result)
                    {
                        this.$emit('saveHint',true,'privateSave','success')
                    }
                    if(res.data.result==='fail')
                    console.log('res.data.result:'+res.data.result)
                    {
                        this.$emit('saveHint',true,'privateSave','fail')
                        console.log('触发saveHint啦')
                    }
           }
           if(saveType==='publicSave'){
                    if(res.data.result==='success')
                    {
                        this.$emit('saveHint',true,'publicSave','success')
                    }
                    if(res.data.result==='fail')
                    {
                        this.$emit('saveHint',true,'publicSave','fail')
                    }
            }
            }).catch(err=>{
                console.log(err)
            })
        }
        ,
        play(){
            console.log('播放');
        }
    },
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
    /* background-image: url(../../../assets/background01.jpg); */
    background-size: 100% 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.choiseBackground-preview-firstLine{
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
    width: 45px;
    height: 45px;
    border-radius:10px;
    /* background-image: ; */
    background: #ff62a5;
    background-size: 100% 100%;
}
.HeadPhoto2{
    width: 45px;
    height: 45px;
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
.choisedMood_say{
    width: 300px;
    height: 100px;
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
.choiseBackground-preview-firstLine>img{
    width: 50px;
    height: 50px;
}
.mask{
    background-color: #ffffff;
    opacity: 0.4;
    width: 343px;
    height: 200px;
}
</style>