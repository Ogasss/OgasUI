<template>
    <div class="main">
        <Button>
            默认按钮
        </Button>

        <Button theme="white">
            白色主题
        </Button>
        
        <Button theme="black">
            黑色主题
        </Button>
        
        <Button theme="blue">
            蓝色主题
        </Button>
    </div>
</template>

<script>
import Button from '../components/lib/Button.vue'
export default {
    components:{
        Button
    },
    setup(){
    }
}
</script>

<style lang="scss" scoped>
    .main{
        
    }
</style>