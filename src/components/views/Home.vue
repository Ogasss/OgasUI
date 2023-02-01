<template>
    <div class="theWrapper">

        <TopNav/>

        <div class="banner">
            <h1>OgasUI</h1>
            <h2>一个不起眼的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/Unclotho/OgasUI">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import TopNav from '../TopNav.vue'
export default {
    name:'Home',
    components:{
        TopNav
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        border: 1px solid red;
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>