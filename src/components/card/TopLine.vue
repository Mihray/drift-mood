<template>
    <div class="top-line">
        <div>
            <div :class="{nowStepLine:backgRed01}"></div>
        </div>
        <div>
            <div :class="{nowStepLine:backgRed02}"></div>
        </div>
        <div>
            <div :class="{nowStepLine:backgRed03}"></div>
        </div>
        <div>
            <div :class="{nowStepLine:backgRed04}"></div>
        </div>
    </div>
    <div class="createMood-title">
        <div class="createMood-title-span">{{showSpan}}</div>

        <div  v-if="lastStepShow" class="createMood-title-nextStep" @click="lastStep"> 
            <div class="createMood-title-nextStep-span">上一步</div>
            <div class="createMood-title-nextStep-box">
                <div class="createMood-title-nextStep-box-inside-lastStep"></div>
            </div>
        </div>

        <div  class="createMood-title-nextStep" @click="nextStep"> 
            <div class="createMood-title-nextStep-span">{{nextSpanText}}</div>
            <div class="createMood-title-nextStep-box">
                <div class="createMood-title-nextStep-box-inside"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            backgRed01:true,
            backgRed02:false,
            backgRed03:false,
            backgRed04:false,
            
            span:[
                '开始生成心情卡片~',
                '今天心情怎样呢~',
                '为你挑选精美背景~',
                '完成啦，快寄出卡片吧~'
            ],
            showSpan:'开始生成心情卡片~',
            nextSpan:[
                '下一步',
                '完成'
            ],
            nextSpanText:'下一步',
            lastStepShow:false,
            // nextStepShow:true
        }
    },
    methods:{
        nextStep(){
            // this.$emit('nextStep','/card/mood')
            // this. path = this.$route.path
            // console.log('path:'+this. path)
            // if(this. path==='/card/hphoto'){
            //     this.backgRed01=true
            //     this.backgRed02=false,
            //     this.backgRed03=false,
            //     this.backgRed04=false
            //     console.log('选择头像页')
            // }
            // if(this. path==='/card/mood'){
            //     this.backgRed01=false,
            //     this.backgRed02=true,
            //     this.backgRed03=false,
            //     this.backgRed04=false
            //     console.log('选择心情页')
            // }
            // if(this. path==='/card/background'){
            //     this.backgRed01=false,
            //     this.backgRed02=false,
            //     this.backgRed03=true,
            //     this.backgRed04=false
            //     console.log('选择背景页')
            // }
            // if(this. path==='/card/send'){
            //     this.backgRed01=false,
            //     this.backgRed02=false,
            //     this.backgRed03=false,
            //     this.backgRed04=true
            //     console.log('寄出去页')
            // }

            if(this.$store.state.cardnowIp==='/card/hphoto'){
                this.lastStepShow=true
                this.$emit('nextStep','/card/mood')
                this.showSpan=this.span[1]
                this.backgRed01=false,
                this.backgRed02=true,
                this.backgRed03=false,
                this.backgRed04=false
                console.log('选择心情页')
            }
            if(this.$store.state.cardnowIp==='/card/mood'){
                this.$emit('nextStep','/card/background')
                this.showSpan=this.span[2]
                this.backgRed01=false,
                this.backgRed02=false,
                this.backgRed03=true,
                this.backgRed04=false
                console.log('选择背景页')
            }
            if(this.$store.state.cardnowIp==='/card/background'){
                this.$emit('nextStep','/card/send')
                this.nextStepShow=false
                this.showSpan=this.span[3]
                this.nextSpanText=this.nextSpan[1]
                this.backgRed01=false,
                this.backgRed02=false,
                this.backgRed03=false,
                this.backgRed04=true
                console.log('寄出去页')
            }
        },
        lastStep(){
            if(this.$store.state.cardnowIp==='/card/hphoto'){
                this.nextStepShow=true
            }
            if(this.$store.state.cardnowIp==='/card/mood'){
                this.lastStepShow=false
                this.nextStepShow=true
                this.nextSpanText=this.nextSpan[0]
                this.$emit('lastStep','/card/hphoto')
                this.showSpan='开始生成心情卡片~'
                this.backgRed01=true,
                this.backgRed02=false,
                this.backgRed03=false,
                this.backgRed04=false
                console.log('选择头像页')
            }
            if(this.$store.state.cardnowIp==='/card/background'){
                this.nextSpanText=this.nextSpan[0]
                this.lastStepShow=true
                this.nextStepShow=true
                this.$emit('lastStep','/card/mood')
                this.showSpan=this.span[1]
                this.backgRed01=false,
                this.backgRed02=true,
                this.backgRed03=false,
                this.backgRed04=false
                console.log('选择心情页')
            }
            if(this.$store.state.cardnowIp==='/card/send'){
                this.nextSpanText=this.nextSpan[0]
                this.nextStepShow=true
                this.lastStepShow=true
                this.$emit('lastStep','/card/background')
                this.showSpan=this.span[3]
                this.backgRed01=false,
                this.backgRed02=false,
                this.backgRed03=true,
                this.backgRed04=false
                console.log('选择背景页')
            }
        }
    }
}
</script>
<style scoped>
.top-line{
    padding-left: 5px;
    /* padding-right: 7px; */
    width: 390px;
    height: 17px;
    display: flex;
    flex-wrap:nowrap;
    margin-top: 26px;
}
.top-line div{
    /* background: #8181c0; */
    flex-grow: 1;
}
.top-line div div{
    width: 88px;
    height: 17px;
    background: #eeeeef;
    border-radius: 8px;
}
.top-line div .nowStepLine{
    width: 88px;
    height: 17px;
    border-radius: 8px;
    background: #ff0652;
}
.createMood-title{
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    padding-left: 14px;
    padding-right: 14px;
}
.createMood-title-span{
    width: 175px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #d14875;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.createMood-title-nextStep{
    display: flex;
}
.createMood-title-nextStep-span{
    width: 50px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #76d1ad;
    line-height: 16px;
    letter-spacing: 0.08px;
}
.createMood-title-nextStep-box{
    width: 30px;
    height: 30px;
    background: #76d1ad;
    margin-top: -7px;
    border-radius:7px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.createMood-title-nextStep-box-inside{
    width: 11px;
    height: 11px;
    border-width:0 0 5px 5px ;
    border-color:white;
    border-style: solid;
    transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    margin-left: -6px;
}
.createMood-title-nextStep-box-inside-lastStep{
    width: 11px;
    height: 11px;
    border-width:0 0 5px 5px ;
    border-color:white;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    margin-left: 6px;
}
</style>