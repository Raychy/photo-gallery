<template>
    <div class="image_galleries">
        <AnimalC v-for="photo in photo.animalPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import AnimalC from '../components/AnimalC.vue'
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
        AnimalC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchAnimalPhotos')

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