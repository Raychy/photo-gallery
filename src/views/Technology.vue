<template>
    <div class="image_galleries">
        <TechnologyC v-for="photo in photo.technologyPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import TechnologyC from '../components/TechnologyC.vue'
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
        TechnologyC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchTechnologyPhotos')

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