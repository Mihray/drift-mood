<template>
    <div class="home">
        <router-view @SaveHint="SaveHint"></router-view>
        <bottom-bar></bottom-bar>
        <save-hint v-if="hint" :hintPram2="hintPram2" :hintPram3="hintPram3" @blank="blank"></save-hint>
    </div>
    <!-- <button @click="bottomclick('/card')">卡片</button>
    <button @click="bottomclick('/explore')">探索</button> -->
</template>
<script>
import BottomBar from './BottomBar/BottomBar.vue';
import SaveHint from './SaveHint.vue';

export default {
    components: {
        BottomBar ,
        SaveHint
    },
    data(){
        return{
            // hintPram1:'',
            hintPram2:'',
            hintPram3:'',
            hint:false,
        }
    },
    mounted(){
    this.$router.push('/card')
  },
    methods:{
        SaveHint(pram1,pram2,pram3){
            console.log('pram1,pram2,pram3:'+pram1,pram2,pram3)
            if(pram1===true){
                this.hint=true
                this.hintPram2=pram2
                this.hintPram3=pram3
            }
        },
        blank(){
            this.hint=false
        }
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