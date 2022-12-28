<template>
    <div class="MySInfo">
        <div class="bgColor"></div>
        <div class="MySInfo-headBox-big"> 
            <div class="MySInfo-headBox"></div>
        </div>
        <div class="StatMood"></div>
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
}
.StatMood{
    width: 100vw;
    background-color: #ff62a5;
    height: 200px;
    margin-top: 20px;
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