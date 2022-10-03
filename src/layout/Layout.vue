<template>
    <div>

        <SideBar />
        <!-- <h2>{{message}} </h2> -->
       
    </div>
  </template> 
  
  <script>
  import SideBar from '../components/SideBar'
//   import SubMenu from '../components/SubMenu'
// import Navbar from '../components/Navbar'
//   import SubMenu from '../components/SubMenu'
  
  
  import partials from '@/store/partials'
  import { mapState } from 'vuex'
  export default {
    name: 'HomeScreen',
    components: {
      SideBar,
    //   SubMenu,
        // Navbar,
      // MainC,
      // NavBarC,
    //   SubMenu,
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