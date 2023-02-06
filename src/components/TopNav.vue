<template>
    <div class="theWrapper">
        <div class="topNav">
            <div class="home" @click="toggleMenu">
                =
            </div>
            <div class="logo">
                <router-link to="/"><img class="logoImg" src="../assets/png/logo.png"></router-link>
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
        .topNav{
            background: rgb(78, 78, 78);
            color: rgba($color: white, $alpha: 0.8);
            box-shadow: inset 0px -5px 20px rgba($color: black, $alpha: 0.3),inset 0px 5px 20px rgba($color: white, $alpha: 0.1);
            height: 8vh;
            width: 100vw;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .home{
                margin-left: 6%;
            }
            .logo{
                display: flex;
                justify-content: center;
                align-items: center;
                .logoImg{
                    height: 3vh;
                }
            }
            .menu{
                margin-right: 8px;
                display: flex;
                li {
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