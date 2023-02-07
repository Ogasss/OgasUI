<template>
    <aside class="aside">
        <div class="wrapper">
           <slot></slot>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .aside{
        background: rgba($color: gray, $alpha: 1);
        position: fixed;
        top: 8vh;
        z-index: 2;
        left: 0px;
        border: 1px solid red;
        width: 128px;
        .wrapper{
            margin-left: 8px;
        }
    }
</style>