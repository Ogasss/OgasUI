<template>
    <div class="theWrapper">
        <TopNav/>
        <div class="content">
            <transition name="aside">
                <Aside v-show="asideVisible" class="aside"/>
            </transition>
            <main>主体内容</main>
        </div>
    </div>
</template>

<script>
import TopNav from '../TopNav.vue'
import Aside from '../Aside.vue'

import { inject } from 'vue'

export default {
    setup(){
        const asideVisible =  inject('asideVisible')
        return {asideVisible}
    },
    components:{
        TopNav,
        Aside,
    }
}
</script>

<style lang="scss" scoped>
    .theWrapper{
        display: flex;
        flex-direction: column;
        
    }
    .content{
        display: flex;
        main{
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