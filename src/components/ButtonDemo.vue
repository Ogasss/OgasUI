<template>
    <div class="main">

        <div class="theButton">
            <Button >
                默认按钮
            </Button>
        </div>

        <div class="theButton">
            <Button theme="black">
                黑色主题
            </Button>
        </div>

        <div class="theButton">
            <Button theme="white">
                白色主题
            </Button>
        </div>

        <div class="theButton">
            <Button theme="blue">
                蓝色主题
            </Button>
        </div>
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
        .theButton{
            margin: 8px;
        }
    }
</style>