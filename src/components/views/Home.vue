<template>
    <Layout>
        <template v-slot:aside>
            <HomeAside v-show="asideVisible" class="aside"/>
        </template>
        <template v-slot:main>
            <div class="main">
                <h1>OgasUI</h1>
                <h2>一个不起眼的UI框架</h2>
                <p class="actions">
                    <a href="https://github.com/Unclotho/OgasUI">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </template>
    </Layout>
</template>
<script lang="ts">
import HomeAside from '../HomeAside.vue'
import Layout from '../Layout.vue'

import { inject } from 'vue'

export default {
    components:{
        HomeAside,
        Layout
    },
    setup(){
        const asideVisible =  inject('HomeAsideVisible')
        return {asideVisible}
    },
}
</script>

<style lang="scss" scoped>
    .main{
        height: 40vh;
        width: 100vw;
        // border: 1px solid red;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>