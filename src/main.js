import { createApp } from 'vue'

import App from './App.vue'
import router from "./router"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import request from './utils/request'
import storage from './utils/storage'
import store from './store'


console.log(import.meta.env)
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(store).use(router).use(ElementPlus).mount('#app')
