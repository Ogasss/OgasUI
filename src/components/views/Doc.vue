<template>
    <div>
        <TopNav/>
        <div class="content">
            <aside>侧边栏</aside>
            <main>主体内容</main>
        </div>
    </div>
</template>

<script>
import TopNav from '../TopNav.vue'
export default {
    components:{
        TopNav,
    }
}
</script>