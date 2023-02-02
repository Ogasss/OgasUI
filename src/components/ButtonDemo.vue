<template>
    <div class="main">
        <Button @click="onClick">开始<Button/>
    </div>
</template>

<script>
import Button from '../components/lib/Button.vue'
export default {
    components:{
        Button
    },
    setup(){
        const onClick = ()=>{
            alert('触发')
        }
        return {onClick}
    }
}
</script>

<style lang="scss" scoped>
    .main{
        
    }
</style>