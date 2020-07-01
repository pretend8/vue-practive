import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login')
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.path === '/login'){
        sessionStorage.removeItem('username')
    }
    const user = sessionStorage.getItem('username')
    if(!user&&to.path!=='/login'){
        next({path:'/login'})
    }else{
        next()
    }
})

export default router
