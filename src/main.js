import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import AboutPage from '../src/pages/AboutPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'HomePage',
        component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        }
    ]
})

createApp(App)
     .use(router)
     .mount('#app')
