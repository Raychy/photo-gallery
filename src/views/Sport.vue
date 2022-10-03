<template>
    <div class="image_galleries">
        <SportC v-for="photo in photo.sportPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import SportC from '../components/SportC.vue'
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
        SportC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchSportPhotos')

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