import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../components/views/Home.vue'
import Doc from '../components/views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import Instructions from '../components/Instructions.vue'

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
            component: Doc,
            children:[
                {
                    path:'instructions',
                    component:Instructions,
                }
                {
                    path: 'switch',
                    component: SwitchDemo,
                },
                {
                    path: 'button',
                    component: ButtonDemo,
                }
            ]
        }
    ]
})

