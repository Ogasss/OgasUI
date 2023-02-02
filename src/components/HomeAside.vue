<template>
    <Aside>
        <h2>导航</h2>
        <ol>
            <li><router-link to="/doc">文档</router-link></li>
        </ol>
    </Aside>
</template>

<script>
import Aside from './Aside.vue'
export default {
    components:{
        Aside
    }
}
</script>