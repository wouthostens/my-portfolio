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
    data() {
        return {
            images: [
                '/images/denuitvlucht/1.jpg',
                '/images/denuitvlucht/2.jpg',
                '/images/denuitvlucht/3.jpg',
                '/images/denuitvlucht/4.jpg',
                '/images/denuitvlucht/5.jpg',
                '/images/denuitvlucht/6.jpg',
                '/images/denuitvlucht/7.jpg',
                '/images/denuitvlucht/8.jpg',
                '/images/denuitvlucht/9.jpg',
                '/images/denuitvlucht/10.jpg',
                '/images/denuitvlucht/11.jpg',
                '/images/denuitvlucht/12.jpg',
                '/images/denuitvlucht/13.jpg',
                '/images/denuitvlucht/14.jpg',
                '/images/denuitvlucht/15.jpg',
                
            ],
        };
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