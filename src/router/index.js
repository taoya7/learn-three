import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue';

export const routes= [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    { path: '/1-try', name: '1-第一个Three程序', component: import('../pages/1-第一个Three程序/index.vue') },
]

const history = createWebHistory();
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
