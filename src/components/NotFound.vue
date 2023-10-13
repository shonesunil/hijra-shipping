<template>
    <div class=" relative">
        <div class=" h-[82vh] bg-[url('../src/assets/error.png')] bg-cover bg-center">
        </div>
        <div class="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center flex flex-col justify-center items-center">
            <h1 class="font-asul font-bold text-2xl md:text-4xl">404</h1>
            <p class="font-raleway font-light text-sm md:text-xl mt-2">This page could not be found</p>
            <router-link to="/">
                <button class="mt-2 bg-white flex justify-center items-center border border-black px-6 py-2 rounded-3xl font-raleway font-light text-sm">
                        <span class="inline">Go to Home</span>
                        <span class="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 25 24" fill="none">
                                <path d="M10.2139 7.42855L14.7853 12L10.2139 16.5714" stroke="black" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFound'
}

</script>

<style scoped>

</style>