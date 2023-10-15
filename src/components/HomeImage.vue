<template>
    <div class="relative text-white">
        <div class="hero h-screen">
        </div>
        <div class="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center">
            <h1 class="font-asul font-bold text-2xl md:text-4xl">HIJRA Shipping </h1>
            <p class="font-raleway font-light text-sm md:text-xl mt-2">is a leading freight forwarder company in the UAE, offering a full range of business with a strong footing in the industry.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeImage'
    }
</script>

<style scoped>

.hero {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('../assets/hero-image.jpg');
    background-size: cover;
    background-position: center;
}

</style>