<template>
    <div class="theWrapper">
        <div class="topNav">
            <div class="home" @click="toggleMenu">
                =
            </div>
            <div class="logo">
                <router-link to="/">logo</router-link>
            </div>
            <ul class="menu">
                <li><router-link to="/">其他</router-link></li>
                <li><router-link to="/">其他</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        const DocAsideVisible =  inject('DocAsideVisible')
        const HomeAsideVisible = inject('HomeAsideVisible')
        const toggleMenu = ()=>{
            setTimeout(() => {
                HomeAsideVisible.value = !HomeAsideVisible.value
                DocAsideVisible.value = !DocAsideVisible.value
            }, 0);
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
    .theWrapper{
        .home{

        }
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
           @media (max-width:500px){
            > .menu>li{display: none;}
           }
        }
        @media (max-width:500px) {
             .topNav{justify-content: space-between;}
        }
    }
</style>