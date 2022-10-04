<template>
    <div class="image_gallery">
        <a :href="photo.links.download" target="_blank">
            <img :src="photo.urls.regular" :alt="photo.description" class="parent_img">
        </a>

        <div class="image_desc">
            <h5>{{ photo.user.name }} <a :href="photo.links.download" target="_blank"><i class="fa fa-download"
                        style="float: right; color:#cee5dc;margin-top:10px "></i> </a> </h5>
            <div class="sub_image_desc">

                <img :src="photo.user.profile_image.medium" :alt="photo.user.name">
                <p>{{ photo.user.username }} #{{ photo.user.total_photos }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "ImageC",
    props: {
        photo: {
            type: Object,
            required: true,
            style:''
        }
    },
    methods: {
        getSpanEstimate(size) {
            if (size > 250) {
                return 2
            }

            return 1
        },
        ImageGridItem() {
            const style = {
                gridColumnEnd: `span ${this.getSpanEstimate(this.photo.width)}`,
                gridRowEnd: `span ${this.getSpanEstimate(this.photo.height)}`,
            }

            return <img style={style} src={this.photo.url} alt={this.photo.alt} />
        },


    },
    mounted() {
        this.ImageGridItem()
    }


}
</script>
