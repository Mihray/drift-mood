<template>
    <div class="favorites">
        <div class="img">
            <div class="favorites-title">
                <span>收藏</span>
                <span>常记起的故事</span>
            </div>
            <div class="favorites-Mood"> 
                <div class="favorites-Mood-group"> 
                    <div class="favorites-Mood-group-firstLine"> 
                        <div class="favorites-Mood-group-firstLine-circle"></div>
                        <span class="favorites-Mood-group-firstLine-date">2022年12月27日</span>
                    </div>
                    <div class="favorites-Mood-group-lineBox"> 
                        <div class="favorites-Mood-group-lineBox-MoodCard"></div>
                    </div>
                </div>
                <div class="favorites-Mood-group"> 
                    <div class="favorites-Mood-group-firstLine"> 
                        <div class="favorites-Mood-group-firstLine-circle"></div>
                        <span class="favorites-Mood-group-firstLine-date">2022年12月27日</span>
                    </div>
                    <div class="favorites-Mood-group-lineBox"> 
                        <div class="favorites-Mood-group-lineBox-MoodCard"></div>
                        <div class="favorites-Mood-group-lineBox-MoodCard"></div>
                        <div class="favorites-Mood-group-lineBox-MoodCard"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
}
</style>