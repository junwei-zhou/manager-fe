import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import request from './utils/request'

console.log(import.meta.env)
const app = createApp(App)
app.config.globalProperties.$request=request
app.use(router).use(ElementPlus).mount('#app')
