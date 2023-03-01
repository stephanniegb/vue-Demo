import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostView from '@/pages/PostView.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
    {
    path: '/',
    name: 'HomePage',
    component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/posts',
        name: 'PostsPage',
        component: PostsPage,
        meta:{
            authIsRequired: true
        }
    },
    {
        path:'/posts/:id', //:id is a dynamic segment and it can be any name
        name: 'PostView',
        component:PostView
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,

    }
]
const router = createRouter({history: createWebHistory(),routes})
const isAunthenticated = () => !!localStorage.getItem('token') 
//this returns true if i have a token in local storage and  false otherwise
const canUserAccess = (to) => {
    // if isAunthenticated returns false, that means no token.... so my can canUserAccess function should return false 
    if(!isAunthenticated() && to.meta.authIsRequired && to.name !== 'LoginPage'){
        return false
    }
    
    return true
}

router.beforeEach(async (to) => {
    const canAccess = await canUserAccess(to)
    if(!canAccess) return {
        name: 'LoginPage'
    }
    // if(isAunthenticated && to.name === 'LoginPage'){
    //          return {
    //             name: 'HomePage'
    //          }
    // }
})

export default router