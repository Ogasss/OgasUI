<template>
    <div class="value">{{value}}</div>
    <button @click="touchSwitch" :class="value ? 'wrapper active' : 'wrapper'">
        <div class="shadow"></div>
        <div class="ball"></div>
    </button>
    
</template>

<script lang="ts">
export default {
    props:{
        value: Boolean,
    },
    // emits: ['update:value'],
    setup(props, context){
        const touchSwitch = () => {
            context.emit('update:value', !props.value)
        }
        return {touchSwitch}
    }
}
</script>

<style lang="scss" scoped>

    $width: 128px;
    $height: $width/3;
    $radius: 0px;
    $onBgColor: rgb(0,115,165);
    $offBgColor: rgb(95, 95, 95);
    $shadowValue1: $width*0.04;
    $shadowValue2: $width*0.08;
    $ballShadowValue1: $width*0.01;
    $ballShadowValue2: $width*0.04;

    .wrapper{
        padding: 2px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(99, 99, 99);
        box-shadow: 0px 0px 0px  rgb(45, 45, 45);
        width: $width;
        height: $height;
        background: $offBgColor;
        box-shadow: inset $shadowValue1 $shadowValue1 $shadowValue2 #1a1a1a,inset $shadowValue1 $shadowValue1 $shadowValue2 #404040;
        transition: all 0.3s ease;
        .ball{
            margin-left: 0%;
            width: 50%;
            height: 100%;
            background: white;
            box-shadow: inset $ballShadowValue1 $ballShadowValue1 $ballShadowValue2 #c9c9c9,inset $ballShadowValue1 $ballShadowValue1 $ballShadowValue2 #c7c7c7;
            transition: all 0.3s ease;
        }
    }

    
    .active{
        background: $onBgColor;
        box-shadow: inset $shadowValue1 $shadowValue1 $shadowValue2;
        > .ball{
            margin-left: 50%;
        }
    } 
</style>