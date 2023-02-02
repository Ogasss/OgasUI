<template>
  <div class="theWrapper">
    <router-view @click="closeMenu"></router-view>
  </div>
</template>

<script lang="ts">
import { provide,ref } from 'vue'
export default {  
  name: 'App',
  setup(){ 
    const DocAsideVisible = ref(false)
    provide('DocAsideVisible',DocAsideVisible)
    const HomeAsideVisible = ref(false)
    provide('HomeAsideVisible',HomeAsideVisible)

    const closeMenu = ()=>{
      HomeAsideVisible.value = false
      DocAsideVisible.value = false
    }

    return { closeMenu }
  }
}
</script>

<style lang="scss">
  .theWrapper{
    width: 100vw;
  }  
</style>
