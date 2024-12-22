import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(router) //注册路由
app.use(ElementPlus) //注册element-plus
app.use(Antd) //注册ant-design-vue
app.mount('#app')

