<template>
    <div class="main">
        <Switch :value="y" @input="y = $event"/>
    </div>
</template>

<script>
import Switch from '../components/Switch.vue'

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
<style lang="scss">

</style>