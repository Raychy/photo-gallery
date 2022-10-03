<template>
    <div class="image_galleries">
        <BuildingC v-for="photo in photo.buildingPhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import BuildingC from '../components/BuildingC.vue'
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
        BuildingC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchBuildingPhotos')

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