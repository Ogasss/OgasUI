<template>
    <Aside>
        <ol>
            <li><router-link to="/doc/instructions">使用说明</router-link></li>
        </ol>
        <h2>组件</h2>
        <ol>
            <li><router-link to="/doc/switch">switch</router-link></li>
            <li><router-link to="/doc/button">button</router-link></li>
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