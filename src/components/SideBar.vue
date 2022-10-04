/* eslint-disable */
<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <div class="logo_name"> <span
        v-if="isHidden">STGallery</span>
        <img v-else src="../assets/logo.png" alt="" class="alt_logo">
         <button class="menu-toggle">
          <span class="material-icons"><i class="fa fa-arrow-right"
              @click="ToggleMenu"></i></span>
        </button> </div>
    </div>


    <section>
      <div class="dashboard_menu" @click="show_mainNenu = !show_mainNenu"><i class="fa fa-home"></i><span
        v-if="isHidden">Dashboard</span> </div>
      <ul class="feeds" v-if="show_mainNenu">
        <li><i class="fa fa-feed"></i> Feed</li>
        <li><i class="fa fa-edit"></i> Edit</li>
        <li><i class="fa fa-search"></i> Search</li>
      </ul>
    </section>
    <div class="sidemenu"><i class="fa-brands fa-wpexplorer"></i> <span
      v-if="isHidden">Explore</span></div>
    <div class="sidemenu"><i class="fa-regular fa-bookmark"></i> <span
        v-if="isHidden">Bookmark</span> </div>
    <div class="sidemenu"><i class="fa fa-download"></i><span
        v-if="isHidden">Downloads</span> </div>
    <div class="sidemenu"><i class="fa-solid fa-bell"></i><span
        v-if="isHidden">Notifications</span> <span class="notify_num" v-if="isHidden">12+</span> </div>
    <div class="advert_menu"  v-if="isHidden">
      <img src="../assets/images/bag2.png" alt="bag" class="advert-bag">
      <p class="advert-text">Upload your photos according to the
        <router-link class="nav_calender" to="/">Calender</router-link>!
        <span v-if="isHidden" class="notify_num fa fa-arrow-right"></span>
      </p>
    </div>
    <div class="sidemenu"><i class="fa fa-gear"></i> <span
      v-if="isHidden">Settings</span> </div>
    <div class="sidemenu"><i class="fa fa-circle-info"></i> <span
      v-if="isHidden">Help</span> </div>
    <article class="side_user"  v-if="isHidden">
      <img src="../assets/images/user.jpg" alt="user" />
      <div class="user_name">
        <div>Brooklyn</div>
        <p><span class="circle">o</span> Account Pro</p>
      </div>
    </article>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      show_mainNenu:false
    }

  },
  // methods:{
  //   ToggleMainMenu: ()=>{
  //     this.show_mainNenu = !this.show_mainNenu
  //     console.log('hellow')
  //   }
  // }

}
</script>
<script setup>

import { ref } from 'vue'
// import logoURL from '../assets/logo.png'
// var isHidden= false
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
var isHidden = ref(localStorage.getItem("isHidden") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  isHidden.value = !isHidden.value
  // isHidden = !isHidden
  localStorage.setItem("is_expanded", is_expanded.value)
  localStorage.setItem("isHidden", isHidden.value)
}
</script>


