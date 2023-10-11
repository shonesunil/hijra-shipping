<template>
    <div :class="navClass" class="md:flex md:justify-between md:items-center border-b border-gray-200 px-4 py-3 md:py-6 md:px-24 sticky top-0 z-30">
        <div class="flex justify-between items-center">
            <div>
                <router-link to="/">
                    <div class="flex items-center w-20 h-8 sm:w-24 md:w-36 md:h-[52px]">
                        <img class="md:block" id="logo" src="../assets/Hijra_Logo.png" alt="logo">
                    </div>
                </router-link>
            </div>
            <div class="md:hidden" @click="toggleBurger">
                <svg id="burger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>

        <!-- desktop nav -->
        <nav class="font-raleway text-sm font-normal hidden md:block">
            <router-link class="px-5 py-3" to="/about">About Us</router-link>
            <router-link class="px-5 py-3" to="/services">Our Services</router-link>
            <router-link class="px-5 py-3" to="/contact">Contact Us</router-link>
        </nav>

        <!-- mobile nav-->
        <div class="absolute top-[56.34px] left-0 w-full h-screen bg-white z-50 hidden md:hidden" id="menu">
            <nav class="font-raleway text-2xl font-light py-5 px-4">
                <ul>
                    <li class="py-5">
                        <router-link class="" to="/about">About Us</router-link>
                    </li>
                    <li class="py-5 flex items-center">
                        <router-link class="pr-2.5" to="/services">Our Services</router-link>
                        <div id="sub-menu" @click="toggleSubMenu" class="inline-block">
                            <svg id="sub-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        
                    </li>
                    <li id="sub-menu-items" class="py-5 text-xl hidden">
                        <ul>
                            <li class="pb-3 px-5"><router-link to="/services/transportation">Transportation</router-link></li>
                            <li class="py-3 px-5"><router-link to="/services/freight">Freight (Sea/Air)</router-link></li>
                            <li class="py-3 px-5"><router-link to="/services/contract-logistics">Contract Logistics</router-link></li>
                            <li class="py-3 px-5"><router-link to="/services/custom-clearance">Custom Clearance</router-link></li>
                            <li class="pt-3 px-5"><router-link to="/services/warehousing">Warehousing</router-link></li>
                        </ul>
                    </li>
                    <li class="py-5">
                        <router-link class="" to="/contact">Contact Us</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'HeaderCmp',
    data() {
        return {
            scrolled: false,
            burgerMenuToggled: false
        };
    },
    computed: {
        navClass() {
            if(this.burgerMenuToggled === true)
                return 'bg-white';
            else
                return this.scrolled ? 'bg-blur' : 'bg-white';
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },
        toggleBurger() {
            this.burgerMenuToggled = !this.burgerMenuToggled;
            const menu = document.querySelector('#menu');
            const burgerIcon = document.querySelector('#burger-icon');
            const closeIcon = document.querySelector('#close-icon');
            const logo = document.querySelector('#logo');

            if(menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            }
            else {
                menu.classList.add('hidden');
            }
            
            if(burgerIcon.classList.contains('hidden')) {
                burgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                logo.classList.remove('hidden');
            }
            else {
                closeIcon.classList.remove('hidden');
                burgerIcon.classList.add('hidden');
                logo.classList.add('hidden');
            }
        },
        toggleSubMenu() {
            const subMenuItems = document.querySelector('#sub-menu-items');
            const subMenu = document.querySelector('#sub-menu');
            if(subMenuItems.classList.contains('hidden')) {
                subMenuItems.classList.remove('hidden');
                subMenu.classList.add('flip');
            }
            else {
                subMenuItems.classList.add('hidden');
                subMenu.classList.remove('flip');
            }
        }
    }
}

</script>

<style scoped>

.bg-blur {
  background: rgba(255, 255, 255, 0.699); /* Add background blur effect */
  backdrop-filter: blur(7px); /* Adjust the blur intensity as needed */
  transition: background 0.3s; /* Add a smooth transition effect */
}

/* html.menu-open {
  overflow: hidden;
} */

</style>