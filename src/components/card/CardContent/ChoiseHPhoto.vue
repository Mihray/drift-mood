<template>
    <div class="choiseHPhoto">
        <span>选择头像风格</span>
        <div class="choiseStyle">
            <div @click="choiseStyleClick('卡通')" :class="{choisedBox:choiseStyleShow1}">卡通</div>
            <div @click="choiseStyleClick('萌宠')" :class="{choisedBox:choiseStyleShow2}">萌宠</div>
            <div @click="choiseStyleClick('复古')" :class="{choisedBox:choiseStyleShow3}">复古</div>
        </div>
        <span>选择头像形状</span>
        <div class="choiseShape">
            <div @click="choiseShapeClick('圆形')" :class="{choisedBox:choiseShapeShow1}">圆形</div>
            <div @click="choiseShapeClick('圆角矩形')" :class="{choisedBox:choiseShapeShow2}">圆角矩形</div>
        </div>
        <div class="choiseHeadPhoto" >选择一个头像吧~
            <div class="choiseHeadPhoto-box"> 
                <div  v-for="item in photo" :key="item" @click="choisePhotoClick(item.id)" :style="{'border-radius':border_radius+'px'}">
                    <div class="likeimg" v-if="item.photoShow"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            choiseStyleShow1:false,
            choiseStyleShow2:false,
            choiseStyleShow3:false,

            choiseShapeShow1:false,
            choiseShapeShow2:false,

            photo:[
                {id:0,name:'photo0',photoShow:false},
                {id:1,name:'photo1',photoShow:false},
                {id:2,name:'photo2',photoShow:false},
                {id:3,name:'photo3',photoShow:false},
                {id:4,name:'photo4',photoShow:false}
            ],
            border_radius:38
        }
    },
    //上一步保存已经填好的数据
    created(){
        this.choiseStyleClick(this.$store.state.Moodcard.choisedStyle)
        this.choiseShapeClick(this.$store.state.Moodcard.choisedShape)
        console.log(this.$store.state.Moodcard.choisedHeadPhoto.id)
        // this.$store.state.Moodcard.choisedHeadPhoto.photoShow=true;
        this.photo[(this.$store.state.Moodcard.choisedHeadPhoto.id)].photoShow=true;
        for(let i=0;i<this.photo.length;i++){
                if(this.photo[i]!==this.photo[(this.$store.state.Moodcard.choisedHeadPhoto.id)]){
                    this.photo[i].photoShow=false
                }
             }
    },
    methods:{
        choiseStyleClick(style){
            console.log('choiseStyleClick');
            if(style==='卡通'){
                this.choiseStyleShow1=true,
                this.choiseStyleShow2=false,
                this.choiseStyleShow3=false
            }
            if(style==='萌宠'){
                this.choiseStyleShow1=false,
                this.choiseStyleShow2=true,
                this.choiseStyleShow3=false
            }
            if(style==='复古'){
                this.choiseStyleShow1=false,
                this.choiseStyleShow2=false,
                this.choiseStyleShow3=true
            }
            console.log('执行');
            this.$store.state.Moodcard.choisedStyle=style;
        },
        choiseShapeClick(Shape){
            if(Shape==='圆角矩形'){
                this.choiseShapeShow2=true,
                this.choiseShapeShow1=false
                this.border_radius=15
                this.$store.state.Moodcard.choisedHPShapeCircle=false
                this.$store.state.Moodcard.choisedHPShapeSquare=true
            }
            if(Shape==='圆形'){
                this.choiseShapeShow2=false,
                this.choiseShapeShow1=true
                this.border_radius=38
                this.$store.state.Moodcard.choisedHPShapeCircle=true
                this.$store.state.Moodcard.choisedHPShapeSquare=false
            }
            this.$store.state.Moodcard.choisedShape=Shape
        },
        choisePhotoClick(number){
             const index=this.photo.findIndex(item=>{
                if(item.id===number){
                    return true
                }
             })
             this.photo[index].photoShow=true
            //  this.photo[index].photoShow=!this.photo[index].photoShow
            //只能选择一张照片的实现
             for(let i=0;i<this.photo.length;i++){
                if(this.photo[i]!==this.photo[index]){
                    this.photo[i].photoShow=false
                }
             }
             const index1=Number(index)+1
             console.log('点击喜欢了第'+index1+'张照片')
             this.$store.state.Moodcard.choisedHeadPhoto=this.photo[index]
        }
    }
}
</script>
<style scoped>
.choiseHPhoto{
   display: flex;
   flex-direction: column;
   justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
}
.choiseHPhoto>span{
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: LEFT;
    color: #000000;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-top: 32px;
}
.choiseStyle{
    width: 342px;
    height: 146px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    justify-content:space-between;
}
.choiseStyle div{
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
.choiseStyle .choisedBox{
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
.choiseShape{
    width: 342px;
    height: 89px;
    display: flex;
    justify-content:space-between;
}
.choiseShape div{
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
.choiseShape .choisedBox{
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

.choiseHeadPhoto{
    width: 343px;
    height: 258px;
    background: #f5f5f5;
    border-radius: 21px;
    text-align: center;

    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #d14875;
    letter-spacing: 0.1px;
}
.choiseHeadPhoto-box{
    /* width: 300px;
    height: 220px; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.choiseHeadPhoto-box>div{
    width: 76px;
    height: 76px;
    /* border-radius:38px; */
    /* background-image: ; */
    background: #ff62a5;
    margin-left: 27px;
    margin-top: 25px;
}
.likeimg{
    width: 63px;
    height: 61px;
    background-image: url(../../../assets/2.生成心情页-选择头像/buttons_Like.png);
    margin-left: 38px;
    margin-top: 38px;
}
</style>