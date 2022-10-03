<template>
    <div class="main_component">
        <!-- <h4>this fetch</h4> -->
        <div class="image_galleries">
            <SearchResult v-for="photo in photo.queryPhotos" :key="photo.id" :photo="photo" />
        </div>
    </div>
</template>

<script>
import SearchResult from "./SearchResult";
import partials from '@/store/partials'

import { mapState, mapGetters } from 'vuex'

export default {
    // name:ImageC,
    data() {
        return {
            ...partials
        }
    },
    components: {
        SearchResult
        // MainC
    },

    computed: {
        ...mapState(['photo']),
         ...mapGetters(["searchPhotoResult"]),
        },
   
}
</script>