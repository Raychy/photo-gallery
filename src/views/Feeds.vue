<template>
    <main id="about-page">
        <Navbar />
        <SubMenu />
        
		<div v-if="this.photo.searchFound && this.photo.queryPhotos.length > 0">
            <ResultMainC />
        </div>
        <div v-else>
            <MainC />
        </div>
	</main>
</template>
<script>
import MainC from '../components/MainC'
import ResultMainC from '../components/ResultMainC'
import SubMenu from '../components/SubMenu'
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'

export default {
    components: {
        SubMenu,
        Navbar,
        MainC,
        ResultMainC,

    },
    computed: {
    ...mapState(['photo']),
  },

}
</script>