import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home"*/  '@/views/Home.vue'),
            meta:{
                index: 1
            }
        },
        
    ]
    
})

export default router;