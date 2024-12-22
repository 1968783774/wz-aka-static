import { createRouter,createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import TestPage from "@/components/TestPage.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {
        path:'/login',
        component: LoginPage
    },
    {
        path:'/home',
        component:HomePage
    },
    {
        path:'/test',
        component:TestPage
    },
    {
        path:'/hello',
        component:HelloWorld
    },
    {
        path:'/',
        redirect:'/login'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router

