<template>
    <div class="main">

        <div>

            <div class="theButton">
                <Button theme="black" @click="onClick">
                    黑色
                </Button>
            </div>

            <div class="theButton">
                <Button theme="white" @click="onClick">
                    白色
                </Button>
            </div>
        </div>

        <div>
            <div class="theButton">
                <Button theme="black" radius @click="onClick">
                    黑色圆角
                </Button>
            </div>

            <div class="theButton">
                <Button theme="white" radius @click="onClick">
                    白色圆角
                </Button>
            </div>
        </div>

        <div>
            <div class="theButton">
                <Button theme="black" border @click="onClick">
                    黑色带框
                </Button>
            </div>

            <div class="theButton">
                <Button theme="white" border @click="onClick">
                    白色带框
                </Button>
            </div>
        </div>

        <div>
            <div class="theButton">
                <Button size="small"  @click="onClick">
                    小号按钮
                </Button>
            </div>

            <div class="theButton">
                <Button size="big" @click="onClick">
                    大号按钮
                </Button>
            </div>
        </div>
        
        <div>
            <div class="theButton">
                <Button ban @click="onClick">
                    按钮禁用
                </Button>
            </div>

            <div class="theButton">
                <Button loading @click="onClick">
                    按钮加载
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/lib/Button.vue'
export default {
    components:{
        Button,
    },
    setup(){
        const onClick = ()=>{
            console.log("点击")
        }
        return {onClick}
    }
}
</script>

<style lang="scss" scoped>
    .main{
        background: gray;
        display: flex;
        flex-direction: column;
        .theButton{
            margin: 8px;
        }
    }
</style>