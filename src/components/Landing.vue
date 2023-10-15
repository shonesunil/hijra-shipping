<template>
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