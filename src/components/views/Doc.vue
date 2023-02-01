<template>
    <div class="theWrapper">
        <TopNav/>
        <div class="content">
            <aside class="aside">
                <div class="wrapper">
                    <h2>组件列表</h2>
                    <ol>
                        <li>
                            <router-link to="/doc">
                                Button
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/doc">
                                Button
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/doc">
                                Button
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/doc">
                                Button
                            </router-link>
                        </li>
                    </ol>
                </div>
                
                
            </aside>
            <main>主体内容</main>
        </div>
    </div>
</template>

<script>
import TopNav from '../TopNav.vue'
export default {
    components:{
        TopNav,
    }
}
</script>

<style lang="scss" scoped>
    .theWrapper{
        display: flex;
        flex-direction: column;
        
    }
    .content{
        display: flex;
        .aside{
            border: 1px solid red;
            width: 128px;
            height: 100vh;
            .wrapper{
                margin-left: 8px;
            }
        }
        main{
            
        }
    }   
    

</style>