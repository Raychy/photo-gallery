<template>
    <div class="image_galleries">
        <CarC v-for="photo in photo.carPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import CarC from '../components/CarC.vue'
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
        CarC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchCarPhotos')

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