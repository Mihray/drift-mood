<template>
    <div class="mask">
        <div class="hint">
            <span class="title">提示</span>
            <span class="content">{{ saveHintArr[Arrindex].msg}}</span>
            <div class="button">
                <button @click="hintClick('cancel',Arrindex)">取消</button>
                <button @click="hintClick('confirm',Arrindex)">确定</button>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    props:{
        hintPram2:String,
        hintPram3:String,
    },
    data(){
        return{
            saveHintArr:[
                {msg:'私人保存成功！点击确认去查看'},
                {msg:'私人保存失败！请重试'},
                {msg:'漂流成功！点击确认去漂流海'},
                {msg:'漂流失败！请重试'}
            ],
            Arrindex:Number,
            // blank:false,
        }
    },
    created(){
        if(this.hintPram2==='privateSave'){
            if(this.hintPram3==='success'){
                this.Arrindex=0
            }
            if(this.hintPram3==='fail'){
                this.Arrindex=1
            }
        }
        if(this.hintPram2==='publicSave'){
            if(this.hintPram3==='success'){
                this.Arrindex=2
            }
            if(this.hintPram3==='fail'){
                this.Arrindex=3
            }
        }
    },
    methods:{
        hintClick(judge,arrNumber){
            console.log('judge,arrNumber：'+judge,arrNumber)
            if(arrNumber===0){
                if(judge==='confirm'){
                    this.$emit('blank')
                    this.$router.push('/MyInfo')
                }
                else if(judge==='cancel'){
                    this.$emit('blank')
                }
            }
            if(arrNumber===1){
                if(judge==='confirm'){
                    this.$emit('blank')
                }
                else if(judge==='cancel'){
                    // this.$emit('blank')
                    this.$emit('blank')
                    this.$router.push('/card/hphoto')
                }
            }
            if(arrNumber===2){
                if(judge==='confirm'){
                    this.$emit('blank')
                    this.$router.push('/explore')
                }
                else if(judge==='cancel'){
                    this.$emit('blank')
                }
            }
            if(arrNumber===3){
                if(judge==='confirm'){
                    this.$emit('blank')
                }
                else if(judge==='cancel'){
                    this.$emit('blank')
                    this.$router.push('/card/hphoto')
                }
            }
        }
    }
}
</script>
<style scoped>
.mask{
    width: 390px;
    height: 100%;
    background-color: rgba(0,0, 0, 0.2);
    margin-top: -760px;
    position: relative;
    z-index: 1;
}
.hint{
    height: 170px;
    width: 297px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 350px;
    margin-left: 40px;
    color: rgb(140, 140, 228);
}
.button{
    display:flex;
    width: 297px;
    /* width: 30px; */
}
.button>button{
    /* border:#333333 1px solid; */
    width: 50%;
    height: 40px;
    text-align: center;
    border-top: 1px #d2c7c7 solid;
    border-bottom: 0;
    font-size: 18px;
}
.button button:first-child{
    border-right: 1px #d2c7c7 solid;
    border-left: 0;
    border-bottom-left-radius: 8px;
}
.button button:nth-child(2){
    border-right: 0;
    border-left: 0;
    border-bottom-right-radius: 8px;
}
.title{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-top: 30px;
}
.content{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
    letter-spacing: 0.1px;
}
</style>