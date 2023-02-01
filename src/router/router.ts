import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../components/views/Home.vue'
import Doc from '../components/views/Doc.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: "/",
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/doc',
            component: Doc
        }
    ]
})

