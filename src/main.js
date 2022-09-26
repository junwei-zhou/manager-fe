import { createApp } from 'vue'

import App from './App.vue'
import router from "./router"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import request from './utils/request'
import storage from './utils/storage'
import api from "./api/api"
import store from './store'

import * as ElIconModules from '@element-plus/icons'



console.log(import.meta.env)
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
app.config.globalProperties.$storage = storage
// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
  }
app.use(store).use(router).use(ElementPlus).mount('#app')
