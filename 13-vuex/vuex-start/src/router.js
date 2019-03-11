import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue')
        },
        {
            path: '/treats',
            name: 'treats',
            component: () => import(/* webpackChunkName: "treats" */ './views/Treats.vue')
        },
        {
            path: '/bones',
            name: 'bones',
            component: () => import(/* webpackChunkName: "bones" */ './views/Bones.vue')
        }
    ]
})
