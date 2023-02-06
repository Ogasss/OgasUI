<template>
    <div>
        <button class="theButton" :class="`theme-${theme}`">
            <slot />
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

<style lang="scss" scoped>

</style>