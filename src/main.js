import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from "./config"
console.log(import.meta.env)
const app = createApp(App)
axios.get(config.mockApi+"/login").then((res)=>{
    console.log(res)
})
app.use(router).use(ElementPlus).mount('#app')
