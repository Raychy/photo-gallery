<template>
    <div class="image_galleries" >
        <ImageC v-for="photo in photo.photos" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import ImageC from './ImageC'
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
        ImageC,
        // SubMenu
    }, 
    methods: {
        fetchPhotos() {
            this.$store.dispatch('photo/fetch')

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