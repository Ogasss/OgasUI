<template>
    <div class="theWrapper">
        <TopNav class="topNav"/>
        <transition name="aside">
            <slot name="aside"></slot>
        </transition>
        <div class="content">
            <div class="mainWrapper">
                <slot name="main"></slot>
            </div>
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
            z-index: 2;
        }
        .up{
            position: fixed;
            width: 48px;
            height: 48px;
            right: 16px;
            bottom: 32px;
            border: 1px solid red;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content{
            display: flex;
            .mainWrapper{
                margin-top: 8vh;
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