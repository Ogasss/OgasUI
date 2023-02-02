<template>
    <div class="theWrapper">
        <TopNav class="topNav"/>
        <transition name="aside">
            <slot name="aside"></slot>
        </transition>
        <div class="content">
            
            <main>
                <slot name="main"></slot>
            </main>
        </div>
        <div class="up" @click="up">
            ↑
        </div>
    </div>
</template>

<script>
import TopNav from './TopNav.vue'
import DocAside from './DocAside.vue'

import { inject } from 'vue'

export default {
    components:{
        TopNav,
        DocAside,
    },
    setup(){
        const asideVisible =  inject('DocAsideVisible')
        return {asideVisible}
    },
    methods: {
        up(){
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .theWrapper{
        position: absolute;
        display: flex;
        flex-direction: column;
        .topNav{
            position: fixed;
            top: 0px;
        }
        .up{
            position: fixed;
            width: 48px;
            height: 48px;
            right: 16px;
            bottom: 16px;
            border: 1px solid red;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content{
            display: flex;
            main{
                padding-top: 8vh;
                position: relative;
                z-index: 1;
            }
        }
    }
    
    
    .aside-leave-from{
        transform: translateX(0px);
    }
    .aside-leave-to{
        transform: translateX(-128px);
    }
    
    .aside-enter-from{
        transform: translateX(-128px);
    }
    .aside-enter-to{
        transform: translateX(0px);
    }
    .aside-enter-active,.aside-leave-active{
        transition: all 0.3s ease;
    }
    
</style>