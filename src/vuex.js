import {createStore} from 'vuex'
const store=createStore({
    state(){
        return{
            login:{
                name:'',
                password:''
            },
            cardIpArr:[
                {id:0,ip:'/card/hphoto'},
                {id:1,ip:'/card/mood'},
                {id:2,ip:'/card/background'},
                {id:3,ip:'/card/send'},
            ],
            cardnowIp:''
        }
    },
    mutations:{
        Login(state){
            console.log('姓名：'+state.name+',密码：'+state.password)
            
        }
    }
})
export default store