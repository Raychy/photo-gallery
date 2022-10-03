<template>
    <div class="image_galleries">
        <FoodC v-for="photo in photo.foodPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import FoodC from '../components/FoodC.vue'
// import SubMenu from '../components/SubMenu'
import partials from '@/store/partials'

import { mapState } from 'vuex'

export default {
    // name:ImageC,
    data() {
        return {
            ...partials
        }
    },
    components: {
        FoodC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchFoodPhotos')

        }
    },
    computed: {
        ...mapState(['photo']),
    },
    mounted() {
        this.fetchPhotos()
       

    }
}
</script>