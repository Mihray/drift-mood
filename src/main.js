import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex.js'
import router from './router.js'


createApp(App).use(store).use(router).mount('#app')
