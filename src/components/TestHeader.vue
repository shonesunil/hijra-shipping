<template>
    <div :class="navClass" class="font-raleway text-lg md:text-sm px-4 py-3 md:px-24 md:py-6 bg-white border-b border-gray-200 sticky top-0 z-30">
        <nav class="md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center">
                <router-link id="homeImg" to="/">
                    <img class="w-24 md:w-36 h-auto" id="logo" src="../assets/Hijra_Logo.png" alt="logo">
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

            <!-- <ul class="md:flex md:items-center z-[-10] md:z-30 md:static absolute bg-white text-black w-full left-0 md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:transition-none"> -->
            <ul class="md:flex md:items-center border-t-[0.5px] pt-5 md:pt-0 border-[#D6D6D6] md:border-0 px-4 md:px-0 z-[-10] md:z-30 md:static absolute bg-white md:bg-inherit text-black w-full left-0 md:w-auto md:opacity-100 opacity-0 top-[-400px]">
                <li class="pb-5 md:px-3 big:px-5 md:py-3" :class="{ 'md:border-b border-black': $route.path === '/' }">
                    <router-link class="" to="/">Home</router-link>
                </li>
                <li class="pb-5 md:px-3 big:px-5 md:py-3" :class="{ 'md:border-b border-black': $route.path === '/about' }">
                    <router-link class="" to="/about">About Us</router-link>
                </li>
                <li class="pb-5 md:px-3 big:px-5 md:py-3" :class="{ 'md:border-b border-black': $route.path === '/services' }">
                    <router-link class="" to="/services">
                        Our Services
                    </router-link>
                    <svg @click="toggleDropdown" class="inline transform transition-transform cursor-pointer" :class="{ 'rotate-180': dropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" >
                        <path d="M11.619 6L7.80952 9.80952L4 6" stroke="black" stroke-width="0.952381" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    <div v-show="dropdownOpen" ref="dropDiv" class="md:absolute mt-5 md:mt-4 w-[215px] bg-white md:border-[0.5px] md:border-[#D2D2D2] md:shadow-md flex flex-col rounded-b-lg">
                        <!-- <ul>
                            <li class="px-5 py-3 hover:font-medium hover:bg-[#E6E6E6]"><router-link class="" to="/services/transportation">Transportation</router-link></li>
                            <li class="px-5 py-3 hover:font-medium hover:bg-[#E6E6E6]"><router-link class="" to="/services/freight">Freight (Sea/Air)</router-link></li>
                            <li class="px-5 py-3 hover:font-medium hover:bg-[#E6E6E6]"><router-link class="" to="/services/contract-logistics">Contract Logistics</router-link></li>
                            <li class="px-5 py-3 hover:font-medium hover:bg-[#E6E6E6]"><router-link class="" to="/services/custom-clearance">Custom Clearance</router-link></li>
                            <li class="px-5 py-3 hover:font-medium hover:bg-[#E6E6E6]"><router-link class="" to="/services/warehousing">Warehousing</router-link></li>
                        </ul> -->
                        <router-link @click="toggleDropdown" class="px-5 pb-3 md:py-3 md:hover:font-medium md:hover:bg-[#E6E6E6]" to="/services/transportation">Transportation</router-link>
                        <router-link @click="toggleDropdown" class="px-5 py-3 md:hover:font-medium md:hover:bg-[#E6E6E6]" to="/services/freight">Freight (Sea/Air)</router-link>
                        <router-link @click="toggleDropdown" class="px-5 py-3 md:hover:font-medium md:hover:bg-[#E6E6E6]" to="/services/contract-logistics">Contract Logistics</router-link>
                        <router-link @click="toggleDropdown" class="px-5 py-3 md:hover:font-medium md:hover:bg-[#E6E6E6]" to="/services/custom-clearance">Custom Clearance</router-link>
                        <router-link @click="toggleDropdown" class="px-5 pt-3 md:py-3 md:hover:font-medium md:hover:bg-[#E6E6E6]" to="/services/warehousing">Warehousing</router-link>
                    </div>
                </li>
                <li class="pb-5 md:px-3 big:px-5 md:py-3" :class="{ 'border-b border-black': $route.path === '/contact' }">
                    <router-link class="" to="/contact">Contact Us</router-link>
                </li>
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
                burgerMenuToggled: false,
                dropdownOpen: false,
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
            },
            toggleDropdown() {
                this.dropdownOpen = !this.dropdownOpen;
                
                if(this.dropdownOpen) {
                    setTimeout(() => {
                        document.body.addEventListener('click', this.handleClickOutside);
                    });
                } else {
                    document.body.removeEventListener('click', this.handleClickOutside);
                }
            },
            handleClickOutside(event) {
                if (this.$refs.dropDiv && !this.$refs.dropDiv.contains(event.target)) {
                    this.dropdownOpen = false;
                    document.body.removeEventListener('click', this.handleClickOutside);
                }
            },
        }
    }
</script>

<style scoped>

.bg-blur {
  background: rgba(255, 255, 255, 0.699); /* Add background blur effect */
  backdrop-filter: blur(7px); /* Adjust the blur intensity as needed */
  transition: background 0.3s; /* Add a smooth transition effect */
}

</style>