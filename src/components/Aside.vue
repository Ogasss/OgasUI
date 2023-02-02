<template>
    <aside class="aside">
        <div class="wrapper">
           <slot><slot/>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .aside{
        position: fixed;
        left: 0px;
        border: 1px solid red;
        width: 128px;
        height: auto;
        .wrapper{
            margin-left: 8px;
        }
    }
</style>