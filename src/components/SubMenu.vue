<template>

    <ul class="sub_major_menu"> 
        <li> <router-link to="/nature"><i class="fa fa-fire" style="color:#09ba67"></i> Nature</router-link> </li>
        <li> <router-link to="/technology"><i class="fa-sharp fa-solid fa-microchip" style="color:#24b773"></i> Technology</router-link> </li>
        <li><router-link to="/animals"><i class="fa-solid fa-hippo" style="color:#8526a5"></i> Animals</router-link>  </li>
        <li><router-link to="/food"><i class="fa-sharp fa-solid fa-bowl-food" style="color:#a57b26"></i> Food</router-link> </li>
        <li><router-link to="/buildings"><i class="fa-solid fa-house" style="color:#e27126"></i> Building</router-link>  </li>
        <li><router-link to="/sport"><i class="fa-sharp fa-solid fa-volleyball" style="color:#eadcd3"></i> Sport</router-link> </li>
        <li><router-link to="/cars"><i class="fa fa-car" style="color:#a83939"></i> Car</router-link> </li>
        <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                More
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Furniture</a></li>
                <li><a class="dropdown-item" href="#">Land</a></li>
                <li><a class="dropdown-item" href="#">House</a></li>
            </ul>
        </li> -->
    </ul>


</template>

<script>
export default {
    name: 'SubMenu',
}
//, mapActions, mapGetters
// import partials from '@/store/partials'
// import { mapState } from 'vuex'
// export default {
//     name: 'SearchC',
//     data() {
//         return {
//             ...partials,
//             search: '',
//             message:''
//         }
//     },
//     methods: {
//         fetchFilterPhotos(search) {
//             if(search.length==0){
//                 this.message ='Enter what to search'
//             }
//             else{
//                 this.$store.dispatch('photo/getSearchPhotos', search.toLowerCase())
//             }

//         },

//     },
//     computed: {
//         ...mapState(['photo']),



//     },



// }
</script>