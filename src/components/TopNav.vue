<template>
    <div class="topNav">
        <div class="logo">
            <router-link to="/">Logo</router-link>
        </div>
        <ul class="menu">
            <li><router-link to="/doc">文档</router-link></li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TopNav'
}
</script>

<style lang="scss" scoped>
        .topNav{
            border: 1px solid red;
            height: 5vh;
            width: 100vw;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .menu{
                border: 1px solid red;
                display: flex;
                li {
                    border: 1px solid red;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
        }
</style>