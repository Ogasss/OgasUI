<template>
    <div>
        <button class="theButton" :class="`theme-${theme}`">
            <div class="content">
                <slot />
            </div>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
    props:{
        theme: {
            type: String,
            default:'white',
        },
    },
    setup(props, context){

    }
}
</script>

<style lang="scss">
    $width: 128px;
    $height: $width/3;
    $shadowValue1: $width*0.04;
    $shadowValue2: $width*0.08;

    .theButton{
        border: none;
        background: none;
        width: $width;
        height: $height;
        font-weight: 50;
    }
    .theme-black{
        background: rgb(65, 65, 65);
        color: rgb(220, 220, 220);
        &:hover{
            border: 1.5px solid rgb(220, 220, 220);
            box-shadow: inset $shadowValue1 $shadowValue1 $shadowValue2 #1a1a1a,inset $shadowValue1 $shadowValue1 $shadowValue2 #404040;
        }
    }
    .theme-white{
        background: rgb(220, 220, 220);
        color: rgb(65, 65, 65);
        &:hover{
            border: 1.5px solid rgb(200, 200, 200);
            box-shadow: inset $shadowValue1 $shadowValue1 $shadowValue2 rgb(200, 200, 200),inset $shadowValue1 $shadowValue1 $shadowValue2 rgb(200, 200, 200);
        }
    }
    .theme-blue{
        background: rgb(20, 180, 230);
        color: rgb(240, 240, 240);
        &:hover{
            border: 1.5px solid rgb(31, 169, 204);   
            box-shadow: inset $shadowValue1 $shadowValue1 $shadowValue2 rgb(31, 169, 204),inset $shadowValue1 $shadowValue1 $shadowValue2 rgb(31, 169, 204);
        }
    }
</style>