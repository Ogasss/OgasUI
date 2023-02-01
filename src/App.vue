<template>
  <div>导航栏
    <router-link to="/Ogas1">Ogas1</router-link>
    <router-link to="/Ogas2">Ogas2</router-link>
  </div>
  <hr/>
  <router-view></router-view>
</template>

<script>
export default {  
  name: 'App',
}
</script>
