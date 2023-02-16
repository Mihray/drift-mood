<template>
    <div class="explore">
         <div class="topImg"></div>
         <div class="exploreTitle">
            <span>航海</span>
            <span>乘时光机探索过去</span>
         </div>
         <div class="exploreTime">
            <span>航行事件</span>
            <div>
                <div class="time" v-for="item in Exploretime" :key="item" @click="ExploretimechoiseClick(item.id)"
                    :class="{choised:item.choised}">{{item.name}}</div>
            </div>
         </div>
         <div class="exploreMood">
            <span>目的地码头</span>
            <div> 
                <div class="exploreMood-Mood" v-for="item in ExploreMood" :key="item" @click="ExploreMoodchoiseClick(item.id)"
                :class="{choised:item.choised}">{{item.name}}</div>
            </div>
         </div>
         <button class="SetSail" @click="SetSail">启航</button>
         <div class="MoodSail">
            <div class="MoodBox">
                <div class="choiseBackground-preview-firstLine">
                    <div class="HeadPhoto">头像</div>
                    <span class="name">name</span>
                    <span class="Mood">Mood</span>
                </div>
                <div class="choisedMood_say">心情物语</div>
                <div class="choiseBackground-preview-lastLine"> 
                    <div class="favorite">收藏
                        <img src="../../assets/切图和组件样式等/探索页-收藏icon.png">
                    </div>
                    <div class="date">时间</div>
                </div>
            </div>

            <div class="MoodBox">
                <div class="choiseBackground-preview-firstLine">
                    <div class="HeadPhoto">头像</div>
                    <span class="name">name</span>
                    <span class="Mood">Mood</span>
                </div>
                <div class="choisedMood_say">心情物语</div>
                <div class="choiseBackground-preview-lastLine"> 
                    <div class="favorite">收藏
                        <img src="../../assets/切图和组件样式等/探索页-收藏icon.png">
                    </div>
                    <div class="date">时间</div>
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
            Exploretime:[
                {id:0,name:'今天',choised:true},
                {id:1,name:'昨天',choised:false},
                {id:2,name:'全部时间',choised:false},
            ],
            ExploreMood:[
                {id:0,name:'开心',choised:true},
                {id:1,name:'得意',choised:false},
                {id:2,name:'平静',choised:false},
                {id:3,name:'愤怒',choised:false},
                {id:4,name:'烦躁',choised:false},
                {id:5,name:'伤心',choised:false}
            ],
        }
    },
    created(){
        axios.post('/explore/search',
        { 
                headers:{token: localStorage.getItem('token')}
            })
    },
    methods:{
        ExploretimechoiseClick(id){
            // console.log( 'id:'+id)
            const index=this.Exploretime.findIndex(item=>{
            if(item.id===id){
                return true
            }
        })
        this.Exploretime[index].choised=true
            for(let i=0;i<this.Exploretime.length;i++){
                    if(this.Exploretime[i]!==this.Exploretime[index]){
                        this.Exploretime[i].choised=false
                    }
                }
                //也可以用下面的方法，代码比肩简洁
            // this.Exploretime[Number(id)].choised=true
            // for(let i=0;i<this.Exploretime.length;i++){
            //         if(this.Exploretime[i]!==this.Exploretime[Number(id)]){
            //             this.Exploretime[i].choised=false
            //         }
            //     }
        },
        ExploreMoodchoiseClick(id){
            const index=this.ExploreMood.findIndex(item=>{
            if(item.id===id){
                return true
            }
        })
            this.ExploreMood[index].choised=true
            for(let i=0;i<this.ExploreMood.length;i++){
                    if(this.ExploreMood[i]!==this.ExploreMood[index]){
                        this.ExploreMood[i].choised=false
                    }
                }
        },
        SetSail(){
            console.log('启航啦')
        }
    }
}
</script>
<style scoped>
.explore{
    box-sizing: border-box;
    /* padding-left: 11px;
    padding-right: 11px; */
    height: calc(100vh - 87px);
    overflow: auto;
    padding-bottom: 20px;
    background: linear-gradient(204deg,rgba(255,137,96,0.85) 0%, rgba(255,98,165,0.85) 100%);
}
.topImg{
    width:390px;
    height: 33px;
    background-image: url(../../assets/切图和组件样式等/探索页顶部横幅.png);
    background-repeat: no-repeat;
    background-position: center;
}
.exploreTitle{
     margin: 20px;
     display: flex;
     align-items: flex-end;
}
.exploreTitle span:first-child{
    font-size: 32px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
    letter-spacing: 0.16px;
    margin-right: 11px;
}
.exploreTitle span:last-child{
    font-size: 14px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #ffffff;
    line-height: 14px;
    letter-spacing: 0.07px;
}
.exploreTime{
      /* margin-top: 20px; */
      display: flex;
      flex-direction: column;
      margin: 20px;
}.exploreTime div{
    display: flex;
}
.exploreTime span{
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #585858;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.exploreTime div>div{
    width: 73px;
    height: 32px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    margin-left: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 0.06px;
    }
.exploreMood{
      /* margin-top: 20px; */
      display: flex;
      flex-direction: column;
      margin: 20px;
}
.exploreMood>span{
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #585858;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.exploreMood div{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.exploreMood div>div{
    width: 73px;
    height: 32px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    margin-left: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 0.06px;
    }
.SetSail{
        margin-top: 20px;
        width: 342px;
        height: 36px;
        background: #ffffff;
        border-radius: 8px;
        margin-left: 20px;
        margin-right: 20px;
        border:none;

        font-size: 16px;
        font-family: PingFang SC, PingFang SC-Semibold;
        font-weight: 600;
        color: #2fbc2c;
        line-height: 16px;
        letter-spacing: 10px;
}
.MoodSail{
    display: flex;
    flex-direction: column;
    /* margin-top: 20px; */
    margin-left: 20px;
    margin-right: 20px;
}
.MoodSail>div{
    width: 343px;
    height: 193px;
    border-radius: 21px;
    /* background-image: url(../../assets/background01.jpg); */
    background-repeat: no-repeat;
    background-position: center;
    background-color: aquamarine;
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
    height: 100px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    letter-spacing: 1px;
    margin-top: 10px;
}
.choiseBackground-preview-lastLine{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 343px;
}
.favorite{
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 73px;
    height: 24px;
    background: #3c8c8c;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
}
.favorite img{
    width: 20px;
    height: 20px;
    /* border: 1px solid #cacaca; */
}
.date{
    width: 150px;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.exploreTime .choised{
    width: 73px;
    height: 32px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    margin-left: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;

    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color:#ff689a;
    line-height: 16px;
    letter-spacing: 0.06px;
}

.exploreMood .choised{
    width: 73px;
    height: 32px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    margin-left: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;

    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color:#ff689a;
    line-height: 16px;
    letter-spacing: 0.06px;
}
</style>