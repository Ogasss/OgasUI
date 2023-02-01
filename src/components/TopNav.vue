<template>
    <div class="topNav">
        <div class="logo" @click="toggleMenu">
            logo
        </div>
        <ul class="menu">
            <li><router-link to="/doc">文档</router-link></li>
            <li><router-link to="/">首页</router-link></li>
        </ul>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        const asideVisible =  inject('asideVisible')
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
        .topNav{
            padding: 0 8px;
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