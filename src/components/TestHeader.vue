<template>
    <div class="font-raleway text-xl md:text-sm bg-white border-b border-gray-200 sticky top-0 z-30">
        <nav class="px-4 md:px-24 py-3 md:py-6 md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center ">
                <router-link id="homeImg" to="/">
                    <img class="w-24 md:w-36" id="logo" src="../assets/Hijra_Logo.png" alt="logo">
                </router-link>
                <span @click="toggleBurger" class="cursor-pointer md:hidden block">
                    <svg id="burger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>

            <ul class="md:flex md:items-center py-5 md:py-0 px-4 md:px-0 z-[-10] md:z-30 md:static absolute bg-primary md:bg-white text-white md:text-black w-full left-0 md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:transition-none">
            <li class="py-5">
                <router-link class="md:px-5 md:py-3" to="/about">About Us</router-link>
            </li>
            <li class="py-5">
                <router-link class="md:px-5 md:py-3" to="/services">Our Services</router-link>
            </li>
            <li class="py-5 md:hidden">
                <router-link to="/contact">Contact Us</router-link>
            </li>
            <button class="bg-primary hover:bg-secondary rounded md:px-5 md:py-3 hidden md:block md:text-white transition ease-linear duration-300">
                <router-link to="/contact">
                    Contact Us
                </router-link>
            </button>
            
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'TestHeader',
        data() {
            return {
                scrolled: false,
                burgerMenuToggled: false
            };
        },
        methods: {
            toggleBurger() {
                let burgerIcon = document.querySelector('#burger-icon')
                let closeIcon = document.querySelector('#close-icon')
                let list = document.querySelector('ul')

                if(burgerIcon.classList.contains('hidden')) {
                    burgerIcon.classList.remove('hidden')
                    closeIcon.classList.add('hidden')
                    list.classList.remove('top-[56px]')
                    list.classList.remove('opacity-100')
                }
                else {
                    burgerIcon.classList.add('hidden')
                    closeIcon.classList.remove('hidden')
                    list.classList.add('top-[56px]')
                    list.classList.add('opacity-100')
                }
            }
        }
    }
</script>

<style scoped>

</style>