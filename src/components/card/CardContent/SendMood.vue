<template>
    <div class="sendMood">
        <div class="sendMood-Moodcard"> </div>
        <div class="sendMood-img">
            <!-- <img src="../../../assets/5.生成心情页-寄出卡片/icons_like copy.png">
            <img src="../../../assets/5.生成心情页-寄出卡片/icons_tabbar_discover copy.png"> -->
        </div>
        <div class="sendMood-aid"></div>
    </div>
</template>
<script>
export default {
    
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
    background-image: url(../../../assets/background01.jpg);
    margin-top: 25px;
}
.sendMood-aid{
    width: 343px;
    height: 258px;
    background: #f5f5f5;
    border-radius: 21px;
}
</style>