<template>
    <div class="home">
        <router-view></router-view>
        <bottom-bar></bottom-bar>
    </div>
    <!-- <button @click="bottomclick('/card')">卡片</button>
    <button @click="bottomclick('/explore')">探索</button> -->
</template>
<script>
import BottomBar from './BottomBar/BottomBar.vue';

export default {
    components: {BottomBar },
    data(){
        return{
        }
    },
    mounted(){
    this.$router.push('/card')
  },
    methods:{
    }
}
</script>
<style scoped>
.home{
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
}
</style>