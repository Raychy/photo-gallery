<template>
    <div class="image_galleries" >
        <NatureC v-for="photo in photo.naturePhotos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import NatureC from '../components/NatureC.vue'
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
        NatureC,
        // SubMenu
    },
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetchNaturePhotos')

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