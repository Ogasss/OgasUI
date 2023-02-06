<template>
        <button 
        @mousedown="mousedown" 
        @mouseup="mouseup" 
        class="theButtonWrapper"
        :class="theButtonClass">
            <div class="theButtonContent">
                <slot />
            </div>
        </button>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
export default {
    props:{
        theme: {
            interface: 'white' || 'black',
            default:'black',
        },
        radius: {
            interface: Boolean || 'true' || 'false' || '',
            default: false
        },
        size:{
            interface: 'normal' || 'small' || 'big',
            default: 'normal'
        },
        border:{
            interface: ''||'true'||'false'|| Boolean,
            default: false
        },
        loading:{
            interface: '' || 'true' || 'false' || Boolean,
            default: false
        },
        ban: {
            interface: '' || 'true' || 'false' || Boolean,
            default: false
        }
    },
    setup(props, context){
        const { theme, radius, size, border, loading, ban } = props
        let theButtonClass = ''
        
        if(theme === 'black'){
            theButtonClass += 'theButtonTheme-black'
            if(typeof(border) === 'string'){
                if(border === '' || border === 'true'){
                    theButtonClass += ' theButtonBlackBorder'
                }
            }else if(typeof(border) === 'boolean'){
                if(border){
                    theButtonClass += ' theButtonBlackBorder'
                }
            }
        }else{
            theButtonClass += 'theButtonTheme-white'
            if(typeof(border) === 'string'){
                if(border === '' || border === 'true'){
                    theButtonClass += ' theButtonWhiteBorder'
                }
            }else if(typeof(border) === 'boolean'){
                if(border){
                    theButtonClass += ' theButtonWhiteBorder'
                }
            }
        }

        if(typeof(radius) === 'boolean'){
            if(radius){
                theButtonClass = theButtonClass + ' ' + 'theButtonRadius'
            }
        }else if(typeof(radius) === 'string'){
            if(radius === '' || 'true'){
                theButtonClass = theButtonClass + ' ' + 'theButtonRadius'
            }
        }

        if(size === 'normal'){
            theButtonClass += ' theButtonSize-normal'
        }else if(size === 'big'){
            theButtonClass += ' theButtonSize-big'
        }else if(size === 'small'){
            theButtonClass += ' theButtonSize-small'
        }
        
        if(typeof(loading) === 'string'){
            if(loading === '' || loading === 'true'){
                theButtonClass += ' theButtonLoading'
            }
        }else{
            if(loading){
                theButtonClass += ' theButtonLoading'
            }
        }

        if(typeof(ban) === 'string'){
            if(ban === '' || ban === 'true'){
                theButtonClass += ' theButtonBan'
            }
        }else{
            if(ban){
                theButtonClass += ' theButtonBan'
            }
        }

        return { theButtonClass }
    },
}
</script>

<style lang="scss">
    $theButtonWidth: 128px;
    $theButtonHeight: $theButtonWidth/3;
    $theButtonShadowValue1: $theButtonWidth*0.04;
    $theButtonShadowValue2: $theButtonWidth*0.08;
    $theButtonBlueActiveColor: rgb(0, 82, 107);
    $theButtonBlueActiveColor2: rgb(164, 207, 248);

    .theButtonWrapper{
        border: none;
        background: none;
        transition: all 0.3s ease;
        font-size: 16px;
        &:active{
            animation: click 0.3s;
        }
    }
    .theButtonBlackBorder{
        border: 1px solid rgb(160, 160, 160);
    }
    .theButtonWhiteBorder{
        border: 1px solid rgb(85, 85, 85);
    }
    .theButtonSize-normal{
        width: $theButtonWidth;
        height: $theButtonHeight;
        font-weight: 50;
    }
    .theButtonSize-small{
        width: 96px;
        height: calc(96px / 3);
        font-size: 12px;
    }
    .theButtonSize-big{
        width: 160px;
        height: calc(160px / 3);
        font-size: 20px;
    }
    .theButtonRadius{
        border-radius: 8px;
    }
    .theButtonTheme-black{
        background: rgb(85, 85, 85);
        color: rgb(220, 220, 220);
        &:hover{
            box-shadow: inset 0px -5px 20px rgba($color: black, $alpha: 0.3),inset 0px 5px 20px rgba($color: white, $alpha: 0.1);
        }
    }
    .theButtonTheme-white{
        color: rgb(65, 65, 65);
        background: rgb(220, 220, 220);
        &:hover{
            box-shadow: inset 0px -5px 20px rgba($color: black, $alpha: 0.3),inset 0px 5px 20px rgba($color: white, $alpha: 0.1);
        }
    }
    .theButtonBan{
        border: 1px solid rgba(80, 190, 240, 0.6);
        pointer-events: none;
        opacity: 0.6;
    }
    .theButtonLoading{
        border: 1px solid rgb(80, 80, 80);
        animation: loading 0.6s infinite;
        pointer-events: none;
    }

    @keyframes click {
        0%{
            opacity: 1;
        }
        50%{
            background: rgba(80, 190, 240, 0.6);
            border: 1px solid rgb(80, 190, 240);
            color: white;
        }
        100%{
            opacity: 1;
        }
    }

    @keyframes loading {
        0%{
            border-left: 1px solid rgb(80, 190, 240) ;
        }
        25%{
            border-top: 1px solid rgb(80, 190, 240) ;
        }
        50%{
            border-right: 1px solid rgb(80, 190, 240) ;
        }
        100%{
            border-bottom: 1px solid rgb(80, 190, 240) ;
        }
    }
</style>