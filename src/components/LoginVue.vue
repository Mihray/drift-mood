<template>
  <div class="loginBox">
  <div class="title-span">漂流心情</div>
  <div class="loginBox-Box">
    <div class="loginBox-loginBox-Box-account"> 
      <div>账号</div>
      <input v-model="$store.state.name">
    </div>
    <div class="loginBox-loginBox-Box-password"> 
      <div>密码</div>
      <input type="password" v-model="$store.state.password">
    </div>
    <button class="loginBox-loginBox-Box-Button" @click="LoginBut">登录</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
  },
  data() {
    return {
      
    }
  },
  methods:{
    LoginBut(){
      axios.post('/mtapi/mihray/login',{
        userName: this.$store.state.name,password: this.$store.state.password
      }
      )
      .then((res)=>{
        console.log(res)
        console.log(res.data)
        if(res.data.result==='fail'){
          alert('登录失败')
          console.log('登录失败了');
        }
        if(res.data.result==='success'){
          console.log('登录成功')
          this.$router.push('/home')
        }
      })
      .catch((err)=>{console.log(err)})

      this.$store.commit('Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginBox{
  width: 390px;
  height: 844px;
  background-image: url(../assets/Illustration@3x.png);
  background-size:160px 844px;
  /* 背景不平铺 */
  background-repeat:no-repeat;
  /* 背景的位置在左边 */
  background-position:right;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: PingFang SC, PingFang SC-Semibold;
}
.title-span{
  width: 166px;
  height: 56px;
  font-size: 40px;
  font-weight: 600;
  text-align: LEFT;
  color: #a94242;
  line-height: 40px;
  letter-spacing: 0.2px;
  margin-top: 163px;
}
.loginBox-loginBox-Box-account{
  margin-top:66px;
  width: 357px;
  height: 67px;
}
.loginBox-loginBox-Box-password{
  width: 357px;
  height: 67px;
  margin-top: 40px;
}
.loginBox-loginBox-Box-account div,.loginBox-loginBox-Box-password div{
  width: 24px;
  height: 17px;
  font-size: 12px;
  font-weight: 600;
  text-align: LEFT;
  color: #000000;
  line-height: 12px;
}
.loginBox-loginBox-Box-account input,.loginBox-loginBox-Box-password input{
  width: 355px;
  height: 52px;
  outline: none;
  opacity: 0.12;
  border: none;
  border-bottom: 1px solid #222534;
  font-size: 16px;
  font-weight: 400;
  text-align: LEFT;
  color: #030F09;
  line-height: 16px;
}
.loginBox-loginBox-Box-Button{
  width: 357px;
  height: 67px;
  margin-top: 40px;
  background: #44cb95;
  border:none;
  border-radius:20px;
  font-size: 16px;
  color: #ffffff;
  line-height: 16px;
}
</style>
