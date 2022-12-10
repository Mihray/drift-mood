import {createStore} from 'vuex'
const store=createStore({
    state(){
        return{
            login:{
                name:'',
                password:''
            }
        }
    },
    mutations:{
        Login(state){
            console.log('姓名：'+state.name+',密码：'+state.password)
            
        }
    }
})
export default store