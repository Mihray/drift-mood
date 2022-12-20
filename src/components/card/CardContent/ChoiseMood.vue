<template>
    <div class="choiseMood">
        <span>选择现在的心情</span>
        <div class="choiseMood-choiseBox"> 
            <div v-for="item in Mood" :key="item" :class="{choisedBox:item.choised}" @click="choiseMoodClick(item.id)">{{item.name}}</div>
        </div>
        <div class="choiseMood-say"> 
            <span>说点什么</span>
            <textarea v-model="message" placeholder="今天好开心哦"></textarea>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Mood:[
                {id:0,name:'开心',choised:true},
                {id:1,name:'得意',choised:false},
                {id:2,name:'平静',choised:false},
                {id:3,name:'愤怒',choised:false},
                {id:4,name:'烦躁',choised:false},
                {id:5,name:'伤心',choised:false}
            ],
            message:''
        }
    },
    created(){
        this.Mood[(this.$store.state.Moodcard.choisedMood.id)].choised=true
        for(let i=0;i<this.Mood.length;i++){
                if(this.Mood[i]!==this.Mood[(this.$store.state.Moodcard.choisedMood.id)]){
                    this.Mood[i].choised=false
                }
             }
       this.message=this.$store.state.Moodcard.choisedMood_say
    },
    methods:{
        choiseMoodClick(id){
            const index=this.Mood.findIndex(item=>{
                if(item.id===id){
                    return true
                }
            })
            this.Mood[index].choised=true
            for(let i=0;i<this.Mood.length;i++){
                if(this.Mood[i]!==this.Mood[index]){
                    this.Mood[i].choised=false
                }
             }
            //  this.$store.state.Moodcard.choisedMood=this.Mood[index].name
            this.$store.state.Moodcard.choisedMood=this.Mood[index]
        }
    },
    updated(){
        this.$store.state.Moodcard.choisedMood_say=this.message
    }
}
</script>
<style scoped>
.choiseMood{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
}
.choiseMood>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-top: 32px;
}
.choiseMood-choiseBox{
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    justify-content:space-between;
}
.choiseMood-choiseBox>div{
    width: 158px;
    height: 42px;
    /* background: linear-gradient(260deg,#ff8960 0%, #ff62a5 100%); */
    border: 1px solid #ff689a;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    font-size: 17px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #ff689a;
    line-height: 22px;
    letter-spacing: 0.07px;
}
.choiseMood-choiseBox .choisedBox{
    width: 158px;
    height: 42px;
    background: linear-gradient(260deg,#ff8960 0%, #ff62a5 100%);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    font-size: 17px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color:  #ffffff;
    line-height: 22px;
    letter-spacing: 0.07px;
}
.choiseMood-say{
    width: 343px;
    height: 258px;
    background: #f5f5f5;
    border-radius: 21px;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding-top: 15px;
}
.choiseMood-say>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #d14875;
    letter-spacing: 0.1px;
}
.choiseMood-say>textarea{
    width: 300px;
    height: 200px;
    outline:none;
    border: none;
    background: #f5f5f5;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 30px;
    letter-spacing: 0.1px;
    margin-top: 20px;
    flex-wrap: wrap;
}
</style>