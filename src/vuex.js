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
                choisedStyleId:'',
                choisedStyle:'',
                choisedShapeId:'',
                choisedShape:'',
                // choisedHPShapeCircle:false,
                // choisedHPShapeSquare:false,
                // choisedHeadPhoto: {id:0,name:'photo0',photoShow:true},
                // choisedMood:{id:0,name:'开心',choised:true},
                // choisedHeadPhoto: {id2:0,photoShow:'',url:'',id:''},
                choisedHeadPhotoUrl: undefined,
                choisedMoodId:'',
                choisedMoodUrl:'',
                choisedMood_say:'',
                choisedBackgroundUrl:'',
                Mooddate:''
            },
            PrivateMoodcardGather:[
            ],
            publicMoodcardGather:[
            ],
            allMoodcardGather:[

            ],
            date:'',
            cardPage: undefined,
            // avatarStyle:[],
            // choiseStyle:[],
            // moodList:[],
            Hplist:[]
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
        },
        pushMood(state){
            console.log('pushMood');
            state.allMoodcardGather.push(state.Moodcard)
            console.log('执行push之后');
            console.log('moodcard:', state.Moodcard);
            console.log('all:', state.allMoodcardGather);
        },
        initCardPage(state, params) {
            state.cardPage = params;
            console.log(state.cardPage)

            // state.avatarStyle=state.cardPage.avatarStyle
            // console.log(state.avatarStyle)
            // console.log('avatarStyle:'+typeof(state.avatarStyle))
            // state.choiseStyle=state.avatarStyle
            // state.choiseStyle.forEach((item,index)=>{
            //     item['choiseStyleShow']=false;
            //     item['id2']=index;
            //     console.log(item)
            // })
        
            // console.log(state.choiseStyle)

            state.moodList=state.cardPage.moodList
            console.log(state.moodList)
            console.log('Moodlist:'+typeof(state.moodList))

        },
        getHPlist(state,params){
            state.Hplist=params
            console.log('Hplist:'+state.Hplist)
            console.log(state.Hplist.avatarList)
        }
    }
})
export default store