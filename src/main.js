import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import {createRouter, createWebHistory} from 'vue-router'
// import HomePage from '../src/pages/HomePage.vue'
// import AboutPage from '../src/pages/AboutPage.vue'
// import PostsPage from '@/pages/PostsPage.vue'
// const routes = [
//     {
//     path: '/',
//     name: 'HomePage',
//     component: HomePage
//     },
//     {
//         path: '/about',
//         name: 'AboutPage',
//         component: AboutPage
//     },
//     {
//         path: '/posts',
//         name: 'PostsPage',
//         component: PostsPage
//     }
// ]
// const router = createRouter({history: createWebHistory(),routes})

createApp(App)
     .use(router)
     .mount('#app')
