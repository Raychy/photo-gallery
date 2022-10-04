/* eslint-disable */
<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <div class="logo_name"> <span v-if="isHidden">STGallery</span>
        <img v-else src="../assets/logo.png" alt="" class="alt_logo">
        <button class="menu-toggle">
          <span class="material-icons"><i class="fa fa-arrow-right" @click="ToggleMenu"></i></span>
        </button>
      </div>
    </div>


    <section>
      <div class="dashboard_menu" @click="show_mainNenu = !show_mainNenu"><i class="fa fa-home"></i><span
          v-if="isHidden">Dashboard</span> </div>
      <ul class="feeds" v-if="show_mainNenu">
        <li><i class="fa fa-feed"></i><span v-if="isHidden">Feed</span> </li>
        <li><i class="fa fa-edit"></i><span v-if="isHidden">Edit</span> </li>
        <li><i class="fa fa-search"></i><span v-if="isHidden">Search</span> </li>
      </ul>
    </section>
    <ul class="sub_major_menu2">
      <li>
        <router-link to="/nature"><i class="fa fa-fire" style="color:#09ba67"></i><span v-if="isHidden">Nature</span>
        </router-link>
      </li>
      <li>
        <router-link to="/technology"><i class="fa-sharp fa-solid fa-microchip" style="color:#24b773"></i><span
            v-if="isHidden">Technology</span></router-link>
      </li>
      <li>
        <router-link to="/animals"><i class="fa-solid fa-hippo" style="color:#8526a5"></i><span
            v-if="isHidden">Animals</span> </router-link>
      </li>
      <li>
        <router-link to="/food"><i class="fa-sharp fa-solid fa-bowl-food" style="color:#a57b26"></i><span
            v-if="isHidden">Food</span> </router-link>
      </li>
      <li>
        <router-link to="/buildings"><i class="fa-solid fa-house" style="color:#e27126"></i><span
            v-if="isHidden">Building</span></router-link>
      </li>
      <li>
        <router-link to="/sport"><i class="fa-sharp fa-solid fa-volleyball" style="color:#eadcd3"></i><span
            v-if="isHidden">Sport</span> </router-link>
      </li>
      <li>
        <router-link to="/cars"><i class="fa fa-car" style="color:#a83939"></i><span v-if="isHidden">Car</span>
        </router-link>
      </li>
    </ul>
    <div class="sidemenu"><i class="fa-brands fa-wpexplorer"></i> <span v-if="isHidden">Explore</span></div>
    <div class="sidemenu"><i class="fa-regular fa-bookmark"></i> <span v-if="isHidden">Bookmark</span> </div>
    <div class="sidemenu"><i class="fa fa-download"></i><span v-if="isHidden">Downloads</span> </div>
    <div class="sidemenu"><i class="fa-solid fa-bell"></i><span v-if="isHidden">Notifications</span> <span
        class="notify_num" v-if="isHidden">12+</span> </div>
    <div class="advert_menu" v-if="isHidden">
      <img src="../assets/images/bag2.png" alt="bag" class="advert-bag">
      <p class="advert-text">Upload your photos according to the
        <router-link class="nav_calender" to="/">Calender</router-link>!
        <span v-if="isHidden" class="notify_num fa fa-arrow-right"></span>
      </p>
    </div>
    <div class="sidemenu"><i class="fa fa-gear"></i> <span v-if="isHidden">Settings</span> </div>
    <div class="sidemenu"><i class="fa fa-circle-info"></i> <span v-if="isHidden">Help</span> </div>
    <article class="side_user" v-if="isHidden">
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
      show_mainNenu: false
    }

  },
}
</script>
<script setup>

import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
var isHidden = ref(localStorage.getItem("isHidden") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  isHidden.value = !isHidden.value
  localStorage.setItem("is_expanded", is_expanded.value)
  localStorage.setItem("isHidden", isHidden.value)
}
</script>


