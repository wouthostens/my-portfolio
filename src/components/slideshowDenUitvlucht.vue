<template>
    <div class="image-slider">
        <div class="slider-container" ref="container">
            <div class="slider-inner" :style="{ width: innerWidth + 'px' }">
                <img v-for="(image, index) in allImages" :src="image" :key="index" class="slider-image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    computed: {
        allImages() {
            // Duplicate the images array
            return [...this.images, ...this.images];
        },
        innerWidth() {
            // Calculate total width of all images
            const imageWidth = 100; // Assuming each image has a width of 100px (adjust as needed)
            return this.allImages.length * imageWidth;
        },
    },
};
</script>

<style scoped>
.image-slider {
    position: relative;
    width: 100%;
    height: 20vh;
    overflow: hidden;
}

.slider-container {
    display: flex;
    width: 100%;
    height: 100%;
}

.slider-inner {
    display: flex;
    height: 100%;
    animation: scroll 200s linear infinite;
}

.slider-image {
    height: 100%;
    object-fit: contain;
}

@keyframes scroll {
    0% {
        transform: translateX(120%);
    }

    100% {
        transform: translateX(-700%);
    }
}
</style>