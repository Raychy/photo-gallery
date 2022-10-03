<template>
    <nav class="main_content ">
        <div class="nav_container">
          <div class="dashboard">Dashboard</div>
          <ul class="menu_list">
            <li class="active">
              <router-link to="/">Feed</router-link>
            </li>
            <li>
              <router-link to="/edit">Edit</router-link>
            </li>
          </ul>
          <form @submit.prevent>
            <div class="input-group mb-3"> 

              <span class="input-group-text" id="basic-addon1" @click="fetchFilterPhotos(search)"><i
                  class="fa fa-search"></i>
              </span>
              <input type="text" v-model="search" class="form-control input_text" placeholder="search"
                aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </form>


        </div>
      </nav>
</template>
<script>
    // import SideBar from './components/SideBar'
    
    // import SubMenu from './components/SubMenu'
    
    
    import partials from '@/store/partials'
    import { mapState } from 'vuex'
    export default {
      name: 'Navbar',
      components: {
        // SideBar,
        // MainC,
        // NavBarC,
        // SubMenu,
        // ResultMainC,
    
      },
      data() {
        return {
          ...partials,
          search: '',
          message: ''
        }
      },
      methods: {
        fetchFilterPhotos(search) {
          if (search != null) {
            if (search.length == 0) {
              this.message = 'Image gallery not found!'
            }
            else {
              var convertSearch = search.toLowerCase()
              this.$store.dispatch('photo/getSearchPhotos', convertSearch)
            }
          }
          else {
            this.message = 'Image gallery not found!'
          }
    
        },
       
    
      },
      computed: {
        ...mapState(['photo']),
      },
    
    }
    </script>