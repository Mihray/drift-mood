import { createRouter,createWebHashHistory } from "vue-router";
import LoginVue from './components/LoginVue.vue'

const routes=[
    {path:'/login',component:LoginVue},
    {path:'home',component:HomeVue,
    children:[
        {path:'/card',component:CardVue},
        {},
        {},
        {},
    ]
}
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router