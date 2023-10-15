<template>
  <div class="bg-gray-100 pt-14 pb-11 px-4 md:px-24 font-playfair">
    <div class="py-2.5">
      <span class="text-2xl md:text-5xl font-semibold">Our Services</span>
      <hr class="mt-4 md:mt-7 border-black w-36">
    </div>
    <div class="text-white mt-6">
      <div class="h-[60vh] relative bg-gradient-to-b from-gray-500 to-black overflow-hidden rounded-lg mb-2 md:mb-4">
        <router-link to="/services/transportation">
          <div class="h-[60vh] mix-blend-overlay bg-[url('../src/assets/transportation/transportation-main.jpg')] bg-cover bg-bottom">
          </div>
          <div class="absolute bottom-0 pb-6 left-[4%] mr-28">
            <span class="font-semibold text-xl md:text-3xl lg:text-4xl">Transportation</span>
            <span class="block font-raleway text-xs md:text-sm lg:text-base font-light mt-4">Leading UAE land transportation company with a wide range of services for safe and timely delivery.</span>
          </div>
        </router-link>
      </div>
      <div class="h-[60vh] relative bg-gradient-to-b from-stone-500 to-black overflow-hidden rounded-lg mb-2 md:mb-4">
        <router-link to="/services/freight">
          <div class="h-[60vh] mix-blend-overlay bg-[url('../src/assets/freight/freight-main.jpg')] bg-cover bg-center">
          </div>
          <div class="absolute bottom-0 pb-6 left-[4%] mr-28">
            <span class="font-semibold text-xl md:text-3xl lg:text-4xl">Freight (Sea/Air)</span>
            <span class="block font-raleway text-xs md:text-sm lg:text-base font-light mt-4">Offering competitive air and ocean freight solutions with the assurance of guaranteed space on our weekly sailings.</span>
          </div>
        </router-link>
      </div>
      <div class="h-[60vh] relative bg-gradient-to-b from-stone-500 to-black overflow-hidden rounded-lg mb-2 md:mb-4">
        <router-link to="/services/contract-logistics">
          <div class="h-[60vh] mix-blend-overlay bg-[url('../src/assets/contract-logistics/contract-logistics-main.jpg')] bg-cover bg-center">
          </div>
          <div class="absolute bottom-0 pb-6 left-[4%] mr-28">
            <span class="font-semibold text-xl md:text-3xl lg:text-4xl">Contract Logistics</span>
            <span class="block font-raleway text-xs md:text-sm lg:text-base font-light mt-4">We streamline supply chains in the UAE by actively handling transportation, warehousing, and order fulfillment.</span>
          </div>
        </router-link>
      </div>
      <div class="h-[60vh] relative bg-gradient-to-b from-gray-500 to-black overflow-hidden rounded-lg mb-2 md:mb-4">
        <router-link to="/services/custom-clearance">
          <div class="h-[60vh] mix-blend-overlay bg-[url('../src/assets/custom-clearance/custom-clearance-main.jpg')] bg-cover bg-center">
          </div>
          <div class="absolute bottom-0 pb-6 left-[4%] mr-28">
            <span class="font-semibold text-xl md:text-3xl lg:text-4xl">Custom Clearance</span>
            <span class="block font-raleway text-xs md:text-sm lg:text-base font-light mt-4">We excel in import/export customs clearances for Sea, Air, and Land consignments, serving Dubai, Sharjah, and Abu Dhabi.</span>
          </div>
        </router-link>
      </div>
      <div class="h-[60vh] relative bg-gradient-to-b from-gray-500 to-black overflow-hidden rounded-lg">
        <router-link to="/services/warehousing">
          <div class="h-[60vh] mix-blend-overlay bg-[url('../src/assets/warehousing/warehousing-main.jpg')] bg-cover bg-bottom">
          </div>
          <div class="absolute bottom-0 pb-6 left-[4%] mr-28">
            <span class="font-semibold text-xl md:text-3xl lg:text-4xl">Warehousing</span>
            <span class="block font-raleway text-xs md:text-sm lg:text-base font-light mt-4">We provide secure, technology-equipped warehousing services in the UAE, ensuring the safety and reliability of your goods.</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import Footer from '../components/Footer.vue';


export default {
  name: 'ServicesView',
  components: {
    Footer
  }
}
</script>
  