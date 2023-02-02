<template>
    <Layout>
        <template v-slot:aside>
            <DocAside v-show="asideVisible" class="aside"/>
        </template>
        <template v-slot:main>
            <div class="main">
                <div class="main">
                    <router-view></router-view>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
import DocAside from '../DocAside.vue'
import Layout from '../Layout.vue'

import { inject } from 'vue'

export default {
    components:{
        DocAside,
        Layout
    },
    setup(){
        const asideVisible =  inject('DocAsideVisible')
        return {asideVisible}
    },
}
</script>

<style lang="scss" scoped>
    .main{
        position: absolute;
        z-index: 1;
    }
</style>