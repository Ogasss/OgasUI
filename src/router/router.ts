import Ogas1 from '../components/Ogas1.vue'
import Ogas2 from '../components/Ogas2.vue'
import {createWebHashHistory, createRouter} from 'vue-router'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: "/",
            redirect: '/Ogas1'
        },
        {
            path: '/Ogas1', 
            component: Ogas1
        },
        {
            path: '/Ogas2',
            component: Ogas2
        }
    ]
})

