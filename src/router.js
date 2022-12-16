import { createRouter,createWebHashHistory } from "vue-router";
import LoginVue from './components/LoginVue.vue'
import HomeVue from './components/HomeVue.vue'
import CardVue from './components/card/CardVue.vue'
import ChoiseHPhoto from './components/card/CardContent/ChoiseHPhoto.vue'
import ChoiseMood from './components/card/CardContent/ChoiseMood.vue'
import ChoiseBackground from './components/card/CardContent/ChoiseBackground.vue'
import SendMood from './components/card/CardContent/SendMood.vue'
import ExploreHome from './components/explore/ExploreHome.vue'
import FavoritesHome from './components/favorites/FavoritesHome.vue'
import MyInfo from './components/myInfo/MyInfoHome.vue'

const routes=[
    {path:'/login',component:LoginVue},
    {path:'/home',component:HomeVue,
    children:[
        {path:'/card',component:CardVue,
        children:[
            {path:'/card/hphoto',component:ChoiseHPhoto},
            {path:'/card/mood',component:ChoiseMood},
            {path:'/card/background',component:ChoiseBackground},
            {path:'/card/send',component:SendMood},
        ]
    },
        {path:'/explore',component:ExploreHome},
        {path:'/Favorites',component:FavoritesHome},
        {path:'/MyInfo',component:MyInfo},
    ]
}
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router