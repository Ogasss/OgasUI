<template>
    <button @click="touchSwitch" :class="value ? 'theSwitchWrapper theSwitchActive' : 'theSwitchWrapper'">
        <div class="theSwitchShadow"></div>
        <div class="theSwitchBall"></div>
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

<style lang="scss">

    $theSwitchWidth: 128px;
    $theSwitchHeight: $theSwitchWidth/3;
    $theSwitchOnBgColor: rgb(0,115,165);
    $theSwitchOffBgColor: rgb(95, 95, 95);
    $theSwitchShadowValue1: $theSwitchWidth*0.04;
    $theSwitchShadowValue2: $theSwitchWidth*0.08;
    $theSwitchBallShadowValue1: $theSwitchWidth*0.01;
    $theSwitchBallShadowValue2: $theSwitchWidth*0.04;

    .theSwitchWrapper{
        padding: 2px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(99, 99, 99);
        box-shadow: 0px 0px 0px  rgb(45, 45, 45);
        width: $theSwitchWidth;
        height: $theSwitchHeight;
        background: $theSwitchOffBgColor;
        box-shadow: inset $theSwitchShadowValue1 $theSwitchShadowValue1 $theSwitchShadowValue2 #1a1a1a,inset $theSwitchShadowValue1 $theSwitchShadowValue1 $theSwitchShadowValue2 #404040;
        transition: all 0.3s ease;
        .theSwitchBall{
            margin-left: 0%;
            width: 50%;
            height: 100%;
            background: white;
            box-shadow: inset $theSwitchBallShadowValue1 $theSwitchBallShadowValue1 $theSwitchBallShadowValue2 #c9c9c9,inset $theSwitchBallShadowValue1 $theSwitchBallShadowValue1 $theSwitchBallShadowValue2 #c7c7c7;
            transition: all 0.3s ease;
        }
    }

    
    .theSwitchActive{
        background: $theSwitchOnBgColor;
        box-shadow: inset $theSwitchShadowValue1 $theSwitchShadowValue1 $theSwitchShadowValue2;
        > .theSwitchBall{
            margin-left: 50%;
        }
    } 
</style>