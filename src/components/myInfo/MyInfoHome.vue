<template>
    <div class="MySInfo">
        <div class="bgColor"></div>
        <div class="MySInfo-headBox-big"> 
            <div class="MySInfo-headBox">
                <div class="MySInfo-headBox-firstLine">
                    <div class="heatPh"></div>
                    <div class="MySInfo-headBox-firstLine-span"> 
                        <span>daming</span>
                        <span>来到漂流心情已经29天了</span>
                    </div>
                </div>
                <span>记录12次心情，并向大家寄出了5次</span>
                <span>收藏28张心情卡片。分享快乐，分担苦恼</span>
            </div>
        </div>
        <div class="StatMood">
            <span>最多的心情Top3</span>
            <div class="barChart"> 
                <div class="barChart-firstBar">
                    <span>10次</span>
                    <div></div>
                </div>
                <div class="barChart-twoBar"> 
                    <span>3次</span>
                    <div></div>
                </div>
                <div class="barChart-lasttBar"> 
                    <span>0次</span>
                    <div></div>
                </div>
            </div>
            <div class="StatMood-MoodSpan"> 
                <span>愤怒</span>
                <span>开心</span>
                <span>平静</span>
            </div>
        </div>
        <div class="history-Mood"> 
                <div class="history-Mood-group"> 
                    <div class="history-Mood-group-firstLine"> 
                        <div class="history-Mood-group-firstLine-circle"></div>
                        <span class="history-Mood-group-firstLine-date">2022年12月27日</span>
                    </div>
                    <div class="history-Mood-group-lineBox"> 
                        <div class="history-Mood-group-lineBox-MoodCard"></div>
                    </div>
                </div>
                <div class="history-Mood-group"> 
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
                </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
    background-color: #d5b1e5;
    margin-right: 20px;
    margin-left: 18px;
    margin-top: 20px;
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
.StatMood-MoodSpan>span{
    font-size: 20px;
    margin-right: 20px;
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
    height: 60px;
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
</style>