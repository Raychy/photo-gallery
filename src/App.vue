<template>
  <div class="app">
    <Layout/>
  
    <main>
      <Navbar />
      <SubMenu />
      
      <router-view/>
  </main>
  </div>
</template>

<script>
  import Layout from "./layout/Layout.vue";
  // import SideBar from './components/SideBar'
  import SubMenu from './components/SubMenu'
  import Navbar from './components/Navbar'
export default {
  name: 'App',
  components:{
      Layout,
      // SideBar,
      SubMenu,
      Navbar
      
    }
  
}
</script>

<style>
@import './assets/css/style.css';
</style>