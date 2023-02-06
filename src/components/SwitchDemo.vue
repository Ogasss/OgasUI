<template>
    <div class="main">
        <Switch v-model:value="y"/>
        <!-- <Switch :value="xxx" @input="xxx = $event"/> -->
    </div>
</template>

<script>
import Switch from './lib/Switch.vue'

import { ref } from 'vue'

export default {
    components:{
        Switch
    },
    setup(){
        const y = ref(true)
        return {y}
    }
}
</script>
<style lang="scss" scoped>
    .main{
        padding: 8px;
    }
</style>