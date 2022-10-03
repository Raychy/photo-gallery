/* eslint-disable */
<template>
  <aside  :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
			<div class="logo_name">STGallery <button class="menu-toggle" >
				<span class="material-icons"><i class="fa fa-arrow-right" @click="ToggleMenu"></i></span>
			</button> </div>
		</div>

		
    <section>
      <div class="dashboard_menu"><i class="fa fa-home"></i> Dashboard</div>
      <ul class="feeds">
        <li><i class="fa fa-feed"></i> Feed</li>
        <li><i class="fa fa-edit"></i> Edit</li>
        <li><i class="fa fa-search"></i> Search</li>
      </ul>
    </section>
    <div class="sidemenu"><i class="fa-brands fa-wpexplorer"></i> Explore</div>
    <div class="sidemenu"><i class="fa-regular fa-bookmark"></i> Bookmark</div>
    <div class="sidemenu"><i class="fa fa-download"></i> Downloads</div>
    <div class="sidemenu"><i class="fa-solid fa-bell"></i> Notations</div>
    <div class="advert_menu">
      <p>Upload your photos according to the
        <router-link class="nav_calender" to="/">Calender</router-link>
      </p>
    </div> 
    <div class="sidemenu"><i class="fa fa-gear"></i> Settings</div>
    <div class="sidemenu"><i class="fa fa-circle-info"></i> Help</div>
    <article class="side_user">
      <img src="../assets/images/user.jpg" alt="user" />
      <div class="user_name">
        <div>Brooklyn</div>
        <p><span class="circle">o</span> Account Pro</p>
      </div>
    </article>
  </aside>
</template>

<script setup>
// export default {
//   name: "SideBar"
// }
import { ref } from 'vue'
// import logoURL from '../assets/logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>


