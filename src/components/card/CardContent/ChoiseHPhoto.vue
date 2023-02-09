<template>
    <div class="choiseHPhoto">
        <span>选择头像风格</span>
        <div class="choiseStyle">
            <div v-for="item in avatarStyleList" :key="item"  @click="choiseStyleClick(item.id2)" :class="{choisedBox:item.choiseStyleShow}">{{ item.name }}</div>
            <!-- <div @click="choiseStyleClick('萌宠')" :class="{choisedBox:choiseStyleShow2}">萌宠</div>
            <div @click="choiseStyleClick('复古')" :class="{choisedBox:choiseStyleShow3}">复古</div> -->
        </div>
        <span>选择头像形状</span>
        <div class="choiseShape">
            <div @click="choiseShapeClick('圆形')" :class="{choisedBox:choiseShapeShow1}">圆形</div>
            <div @click="choiseShapeClick('圆角矩形')" :class="{choisedBox:choiseShapeShow2}">圆角矩形</div>
        </div>
        <div class="choiseHeadPhoto" >选择一个头像吧~
            <div class="choiseHeadPhoto-box"> 
                <div  v-for="item in photo" :key="item" @click="choisePhotoClick(item.id2)" :style="{'border-radius':border_radius+'px','backgroundImage':'url('+item.url+')'}" :src="item.url">
                    <!-- <img :src="item.url" style="width:76px;height: 76px;"/> -->
                    <div class="likeimg" v-if="item.photoShow"></div>
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
            idNumber:Number,
            avatarStyleList:[],
            // avatarStyle:[],
            // choiseStyle:[
            //    {id:0,name:'',choiseStyleShow:false},
            //    {id:1,name:'',choiseStyleShow:false},
            //    {id:2,name:'',choiseStyleShow:false}
            // ],

            // choiseStyleShow1:false,
            // choiseStyleShow2:false,
            // choiseStyleShow3:false,

            clickIndex:undefined,

            choiseShapeShow1:false,
            choiseShapeShow2:false,
            photo:[],
            // photo:[
            //     {id:0,name:'photo0',photoShow:false,url: 'https://pic.imgdb.cn/item/63d7e31cface21e9efa70917.jpg'},
            //     {id:1,name:'photo1',photoShow:false},
            //     {id:2,name:'photo2',photoShow:false},
            //     {id:3,name:'photo3',photoShow:false},
            //     {id:4,name:'photo4',photoShow:false}
            // ],
            border_radius:38
        }
    },
    //上一步保存已经填好的数据
    created(){
        const avatarStyleList = this.$store.state.cardPage.avatarStyle;
        avatarStyleList.forEach((item,index)=>{
                item['choiseStyleShow']=false;
                item['id2']=index;
                console.log(item)
            })
            this.avatarStyleList = avatarStyleList
        

            
        // this.choiseStyleClick(this.$store.state.Moodcard.choisedStyle || 0)
        // this.choiseShapeClick(this.$store.state.Moodcard.choisedShape)

        // console.log(this.$store.state.Moodcard.choisedHeadPhoto.id2)
        // this.$store.state.Moodcard.choisedHeadPhoto.photoShow=true;
        // this.photo[(this.$store.state.Moodcard.choisedHeadPhoto.id2)].photoShow=true;
        // for(let i=0;i<this.photo.length;i++){
        //         if(this.photo[i]!==this.photo[(this.$store.state.Moodcard.choisedHeadPhoto.id2)]){
        //             this.photo[i].photoShow=false
        //         }
        //      }
    },
    methods:{
        choiseStyleClick(id){
            console.log('id:' + id);
            this.avatarStyleList.forEach((item,index)=>{
                if(index===id){
                    console.log('index'+index)
                    item.choiseStyleShow=true;
                    this.$store.state.Moodcard.choisedStyle=item;
                    this.idNumber=index

                    this.avatarStyleList.forEach((item2,index2)=>{
                        if(index2!==index){
                            item2.choiseStyleShow=false
                        }
                    })
                }       
            })
            console.log(this.avatarStyleList);
            console.log(id);
            // post 的三个参数： url, params, config。 headers写在config里面
            const that = this;
            axios.post('/card/getAvatars', 
            { avatarStyleId:this.avatarStyleList[id].id },
            { headers: { token: localStorage.getItem('token')}},
            ).then((res)=>{
                console.log(res);
                that.$store.commit('getHPlist', res.data);

                const Hpolist=this.$store.state.Hplist.avatarList;
                console.log('Hpolist:');
                console.log(Hpolist);
                Hpolist.forEach((item,index)=>{
                item['photoShow']=false;
                item['id2']=index;
                console.log('Hpolist加了属性之后：')
                console.log(Hpolist)
            })
            this.photo=Hpolist;

            }).catch(err=>{
                console.log(err)
            })
            
            // const Hpolist=this.$store.state.Hplist.avatarList;
            // console.log('Hpolist:');
            // console.log(Hpolist);
            // Hpolist.forEach((item,index)=>{
            //     item['photoShow']=false;
            //     item['id2']=index;
            //     console.log('Hpolist加了属性之后：')
            //     console.log(Hpolist)
            // })
            // this.photo=Hpolist;
            // this.$store.state.choiseStyle[this.clickIndex].choiseStyleShow=true;
            // for(let i=0;i<this.$store.state.choiseStyle;i++){
            //     if(this.$store.state.choiseStyle[i]!==this.$store.state.choiseStyle[this.clickIndex]){
            //         this.this.$store.state.choiseStyle[i].choiseStyleShow=false
            //     }
            //  }
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
        choisePhotoClick(id){
            this.photo.forEach((item,index)=>{
                if(id===index){
                    item.photoShow=true
                }else(
                    item.photoShow=false
                )
            })
            //  const index=this.photo.findIndex(item=>{
            //     if(item.id===number){
            //         return true
            //     }
            //  })
            //  this.photo[id].photoShow=true
            //  this.photo[index].photoShow=!this.photo[index].photoShow
            //只能选择一张照片的实现
            //  for(let i=0;i<this.photo.length;i++){
            //     if(this.photo[i]!==this.photo[index]){
            //         this.photo[i].photoShow=false
            //     }
            //  }
             const index1=Number(id)+1
             console.log('点击喜欢了第'+index1+'张照片')
            //  this.$store.state.Moodcard.choisedHeadPhoto=this.photo[id]
        },


    },
    mounted() {
        console.log('子组件的mounted，用来存数据data');
        console.log(this.$store.state.cardPage);
    },
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
    background-size: 100% 100%;
}
.likeimg{
    width: 63px;
    height: 61px;
    background-image: url(../../../assets/2.生成心情页-选择头像/buttons_Like.png);
    margin-left: 38px;
    margin-top: 38px;
}
</style>