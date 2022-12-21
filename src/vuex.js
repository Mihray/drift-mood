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
            ],
            date:''
        }
    },
    mutations:{
        Login(state){
            console.log('姓名：'+state.name+',密码：'+state.password) 
        },
        MoodcardShow(state){
            console.log(state.Moodcard)
        },
        getDate(state){
            const adate=new Date()
            // const year=adate.getFullYear()
            const Month=adate.getMonth()+1
            // const Minutes=
            // console.log(Minutes)
            function Minutes(){
                if(Number(adate.getMinutes())<10){
                console.log('黑恶后')
                return '0'+adate.getMinutes()
            }else{
                console.log('黑')
                return adate.getMinutes()
            }}
            const MinutesA=Minutes()
            console.log(MinutesA)
            state.date=(adate.getFullYear()+'-'+Month+'-'+adate.getDate()+' '+adate.getHours()+':'+MinutesA)
            console.log('时间：'+state.date)
        }
    }
})
export default store