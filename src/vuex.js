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
            cardnowIp:'',
            Moodcard:{id:0,
                choisedStyle:'',
                choisedShape:'',
                choisedHeadPhoto: {id:0,name:'photo0',photoShow:true},
                choisedMood:{id:0,name:'开心',choised:true},
                choisedMood_say:'',
                choisedBackground:''
            },
            MoodcardGather:[
            ]
        }
    },
    mutations:{
        Login(state){
            console.log('姓名：'+state.name+',密码：'+state.password) 
        },
        MoodcardShow(state){
            console.log(state.Moodcard)
        }
    }
})
export default store