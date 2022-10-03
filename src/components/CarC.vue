<template>
    <div class="image_gallery">
        <a :href="photo.links.download" target="_blank">
            <img :src="photo.urls.regular" :alt="photo.description" class="parent_img" >
          </a>
       
        <div class="image_desc">
            <h5>{{ photo.user.name }} </h5>
            <p>{{ photo.user.username }} #{{ photo.user.total_photos }}</p>
            <img :src="photo.user.profile_image.medium" :alt="photo.user.name">
        </div>
    </div>
</template>
<script>


export default {
    name: "CarC",
    props: {
        photo: {
            type: Object,
            required: true
        }
    },
   
}
</script>
