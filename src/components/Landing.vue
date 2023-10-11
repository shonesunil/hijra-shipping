<template>
    <!-- <div class="h-screen z-50 relative">
        <div class="h-screen bg-[url('../src/assets/landing.jpg')] bg-cover bg-bottom"></div>
        <div class="absolute top-10 left-10 text-xl">Hi</div>
    </div> -->
    <!-- <div class="flex justify-center items-center h-screen bg-[url('../src/assets/landing.jpg')] bg-cover bg-center bg-no-repeat transition-opacity duration-1000" :class="{ 'opacity-0': fadeOut }">
        <div class="text-white text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p class="text-lg">Discover amazing content here!</p>
        </div>
      </div> -->
      <!-- <div class="fixed inset-0 flex justify-center items-center z-40 h-screen transition-opacity duration-1000" :class="{ 'opacity-0': fadeOut }">
        <div class="text-white text-center h-full w-full bg-[url('../src/assets/landing.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay">
            <img class="w-28" src="../assets/Hijra_Logo.png" alt="">
        </div>
    </div> -->
    <div @click="fadeOutFunc" class="fixed inset-0 flex justify-center items-center z-40 bg-[url('../src/assets/landing.jpg')] bg-cover bg-center bg-no-repeat transition-opacity duration-1000" :class="{ 'opacity-0': fadeOut }">
    </div>
</template>

<script>
    export default {
        name: 'Landing',
        data() {
            return {
            fadeOut: false,
            };
        },
        mounted() {
            setTimeout(() => {
                this.fadeOutFunc()
            }, 2000);
        },
        methods: {
            fadeOutFunc() {
                this.fadeOut = true;
                this.$emit('fade-out-landing');
            }
        },
    }
</script>

<style scoped>

</style>