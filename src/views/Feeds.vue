<template>
    <div >
        <div v-if="this.photo.searchFound && this.photo.queryPhotos.length > 0">
            <ResultMainC />
        </div>
        <div v-else>
            <MainC />
        </div>
		
	</div>
</template>
<script>
import MainC from '../components/MainC'
import ResultMainC from '../components/ResultMainC'

import { mapState } from 'vuex'

export default {
    components: {
       
        MainC,
        ResultMainC,

    },
    computed: {
    ...mapState(['photo']),
  },

}
</script>