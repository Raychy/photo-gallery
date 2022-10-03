<template>
  <div class="app">
    <Layout/>
  
   <router-view/>
  </div>
</template>

<script>
  import Layout from "./layout/Layout.vue";
export default {
  name: 'App',
  components:{
      Layout
      
    }
  
}
</script>

<style>
@import './assets/css/style.css';
</style>