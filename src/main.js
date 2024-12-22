import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'amfe-flexible'


const app = createApp(App)
app.use(router) //注册路由
app.use(ElementPlus) //注册element-plus
app.use(Antd) //注册ant-design-vue
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

