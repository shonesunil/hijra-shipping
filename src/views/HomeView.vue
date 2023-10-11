<template>
  <HomeImage />
  <div class="pt-10 md:pt-24 font-playfair">
    <p class="text-5xl font-semibold px-4 md:px-24">Our Services</p>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-6 gap-3 mt-10 rounded overflow-hidden px-4 md:px-24"> <!-- image gallery -->

      <div @mouseover="img1Hovered = true" @mouseout="img1Hovered = false" class="md:col-span-1 lg:col-span-2 h-[420px] relative mb-3 md:mb-0 overflow-hidden">
        <router-link to="/services/transportation">
          <img :class="{ 'scale-110': img1Hovered }" class="brightness-50 h-full w-full transition ease-linear duration-150 object-cover" src="../assets/transportation/transportation-main.jpeg" alt="Transportation">
          <div class="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl">
            <span class="bg-blur">Transportation</span>
          </div>
        </router-link>
      </div>
      <div @mouseover="img2Hovered = true" @mouseout="img2Hovered = false" class="md:col-span-1 lg:col-span-2 h-[420px] relative mb-3 md:mb-0 overflow-hidden">
        <router-link to="/services/freight">
          <img :class="{ 'scale-110': img2Hovered }" class="brightness-50 h-full w-full transition ease-linear duration-150 object-cover" src="../assets/freight/freight-main.jpeg" alt="Freight">
          <div class="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl">
            <span class="bg-blur">Freight (Sea/Air)</span>
          </div>
        </router-link>
      </div>
      <div @mouseover="img3Hovered = true" @mouseout="img3Hovered = false" class="md:col-span-1 lg:col-span-2 h-[420px] relative mb-3 md:mb-0 overflow-hidden">
        <router-link to="/services/contract-logistics">
          <img :class="{ 'scale-110': img3Hovered }" class="brightness-50 h-full w-full transition ease-linear duration-150 object-cover" src="../assets/contract-logistics/contract-logistics-main.png" alt="Contract Logistics">
          <div class="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl">
            <span class="bg-blur">Contract Logistics</span>
          </div>
        </router-link>
      </div>
      <div @mouseover="img4Hovered = true" @mouseout="img4Hovered = false" class="md:col-span-1 lg:col-span-3 h-[420px] relative mb-3 md:mb-0 overflow-hidden">
        <router-link to="/services/custom-clearance">
          <img :class="{ 'scale-110': img4Hovered }" class="brightness-50 h-full w-full transition ease-linear duration-150 object-cover" src="../assets/custom-clearance/custom-clearance-main.jpeg" alt="Custom Clearance">
          <div class="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl">
            <span class="bg-blur">Custom Clearance</span>
          </div>
        </router-link>
      </div>
      <div @mouseover="img5Hovered = true" @mouseout="img5Hovered = false" class="md:col-span-2 lg:col-span-3 h-[420px] relative md:mb-0 overflow-hidden">
        <router-link to="/services/warehousing">
          <img :class="{ 'scale-110': img5Hovered }" class="brightness-50 h-full w-full transition ease-linear duration-150 object-cover" src="../assets/warehousing/warehousing-main.jpeg" alt="Warehousing">
          <div class="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl">
            <span class="bg-blur">Warehousing</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="bg-primary-100 mt-24 text-white px-4 py-14 md:p-24 lg:flex justify-between gap-14"> <!-- industry -->
      <div class="">
        <h1 class="text-5xl font-semibold">Industry</h1>
        <span class="block mt-6 text-xl font-light font-raleway">Hijra Shipping provides end-to-end logistics services across industries such as</span>
      </div>
      <div class="grid grid-cols-2 gap-5 mt-10 lg:mt-0">
        <div class="bg-primary-200 px-24 py-8 flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[90px]" viewBox="0 0 90 91" fill="none">
            <path d="M58.125 84.9507H84.375C85.3696 84.9507 86.3234 84.5556 87.0267 83.8524C87.7299 83.1491 88.125 82.1953 88.125 81.2007V58.7007C88.125 57.7061 87.7299 56.7523 87.0267 56.0491C86.3234 55.3458 85.3696 54.9507 84.375 54.9507H58.125M69.3751 54.9507V84.9507M58.125 69.9507H88.125M13.125 54.9507V19.3257C13.125 15.8447 14.5078 12.5063 16.9693 10.0449C19.4307 7.58349 22.7691 6.20068 26.25 6.20068C29.731 6.20068 33.0694 7.58349 35.5308 10.0449C37.9922 12.5063 39.375 15.8447 39.375 19.3257V54.9507M84.375 47.4507V32.4507C84.375 31.4561 83.9799 30.5023 83.2767 29.799C82.5734 29.0958 81.6196 28.7007 80.625 28.7007H61.875C60.8805 28.7007 59.9266 29.0958 59.2234 29.799C58.5201 30.5023 58.125 31.4561 58.125 32.4507V47.4507M65.625 36.2008V21.2008C65.625 19.7089 66.2177 18.2782 67.2726 17.2233C68.3275 16.1684 69.7582 15.5758 71.25 15.5758C72.7419 15.5758 74.1726 16.1684 75.2275 17.2233C76.2824 18.2782 76.875 19.7089 76.875 21.2008V36.2008M5.62503 32.4507H46.875C46.875 32.4507 50.625 32.4507 50.625 36.2007V81.2007C50.625 81.2007 50.625 84.9507 46.875 84.9507H5.62503C5.62503 84.9507 1.87503 84.9507 1.87503 81.2007V36.2007C1.87503 36.2007 1.87503 32.4507 5.62503 32.4507Z" stroke="#F5F5F5" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mt-6">FMCG</span>
        </div>
        <div class="bg-primary-200 px-24 py-8 flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[90px]" viewBox="0 0 90 91" fill="none">
            <g clip-path="url(#clip0_436_393)">
              <path d="M28.125 24.9507V19.3257C28.125 14.8502 29.9029 10.558 33.0676 7.39332C36.2322 4.22864 40.5245 2.45074 45 2.45074C49.4755 2.45074 53.7677 4.22864 56.9324 7.39332C60.0971 10.558 61.875 14.8502 61.875 19.3257V24.9507M28.125 24.9507C29.6168 24.9507 31.0476 25.5434 32.1025 26.5983C33.1574 27.6532 33.75 29.0839 33.75 30.5757V32.4507H22.5V30.5757C22.5 29.0839 23.0926 27.6532 24.1475 26.5983C25.2024 25.5434 26.6332 24.9507 28.125 24.9507ZM61.875 24.9507C63.3668 24.9507 64.7976 25.5434 65.8525 26.5983C66.9074 27.6532 67.5 29.0839 67.5 30.5757V32.4507H56.25V30.5757C56.25 29.0839 56.8426 27.6532 57.8975 26.5983C58.9524 25.5434 60.3831 24.9507 61.875 24.9507ZM39.3712 43.7009H50.6212M85.95 42.8984C85.7471 40.0611 84.4769 37.406 82.3951 35.4676C80.3133 33.5291 77.5745 32.4512 74.73 32.4509H15.2662C12.421 32.4503 9.68129 33.5277 7.59872 35.4663C5.51614 37.4048 4.24542 40.0605 4.04247 42.8984L1.90122 76.6484C1.791 78.1896 1.99945 79.7371 2.5136 81.1942C3.02774 82.6514 3.83655 83.9869 4.88959 85.1177C5.94263 86.2485 7.21733 87.1503 8.63421 87.7668C10.0511 88.3832 11.5798 88.7012 13.125 88.7009H76.875C78.4198 88.7007 79.9481 88.3823 81.3646 87.7656C82.781 87.1489 84.0552 86.2471 85.1079 85.1164C86.1605 83.9856 86.969 82.6502 87.4829 81.1933C87.9968 79.7364 88.2052 78.1893 88.095 76.6484L85.95 42.8984ZM24.3712 32.4509H31.8712V88.7009H24.3712V32.4509ZM58.1212 32.4509H65.6212V88.7009H58.1212V32.4509Z" stroke="#F5F5F5" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_436_393">
                <rect width="90" height="90" fill="white" transform="translate(0 0.575684)"/>
              </clipPath>
            </defs>
          </svg>
          <span class="mt-6">Fashion</span>
        </div>
        <div class="bg-primary-200 px-24 py-8 flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[90px]" viewBox="0 0 90 91" fill="none">
            <path d="M80.625 37.4682V79.3257C80.625 80.3203 80.2299 81.2741 79.5266 81.9774C78.8234 82.6806 77.8695 83.0757 76.875 83.0757H13.125C12.1304 83.0757 11.1766 82.6806 10.4733 81.9774C9.77008 81.2741 9.37499 80.3203 9.37499 79.3257V37.4682M1.87498 23.0757L8.33998 10.1494C8.65119 9.52663 9.12965 9.00276 9.72176 8.6365C10.3139 8.27025 10.9962 8.07606 11.6925 8.07568H78.3075C79.0037 8.07606 79.6861 8.27025 80.2782 8.6365C80.8703 9.00276 81.3488 9.52663 81.66 10.1494L88.125 23.0757M1.87498 23.0757H88.125M1.87498 23.0757L1.87499 26.8257C1.80053 29.0319 2.40796 31.2075 3.61453 33.0561C4.82111 34.9047 6.56818 36.3364 8.61779 37.1562C10.6674 37.9761 12.9199 38.1442 15.0685 37.6377C17.2171 37.1312 19.1574 35.9747 20.625 34.3257M88.125 23.0757L88.125 26.8257C88.2016 29.0329 87.5955 31.2099 86.3893 33.0599C85.183 34.9099 83.4355 36.3428 81.3849 37.163C79.3344 37.9832 77.0807 38.1509 74.9314 37.6431C72.782 37.1353 70.8417 35.9768 69.375 34.3257M69.375 34.3257C68.1607 36.3792 66.4795 38.1176 64.4677 39.3999C62.4559 40.6822 60.1702 41.4722 57.796 41.706C55.4218 41.9398 53.0259 41.6107 50.8027 40.7454C48.5795 39.8801 46.5915 38.503 45 36.7257C43.4085 38.503 41.4205 39.8801 39.1973 40.7454C36.9741 41.6107 34.5782 41.9398 32.204 41.706C29.8298 41.4722 27.5441 40.6822 25.5323 39.3999C23.5205 38.1176 21.8393 36.3792 20.625 34.3257M69.375 34.3257L69.375 23.0757L65.625 8.07568M20.625 34.3257L20.625 23.0757L24.375 8.07568M45 36.7444V8.07568M16.875 49.3257H46.875V71.8257H16.875V49.3257ZM73.125 83.0757H54.375V51.2007C54.375 50.7034 54.5725 50.2265 54.9242 49.8749C55.2758 49.5233 55.7527 49.3257 56.25 49.3257H71.25C71.7473 49.3257 72.2242 49.5233 72.5758 49.8749C72.9275 50.2265 73.125 50.7034 73.125 51.2007V83.0757Z" stroke="#F5F5F5" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mt-6">Retail</span>
        </div>
        <div class="bg-primary-200 px-24 py-8 flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[90px]" viewBox="0 0 90 91" fill="none">
            <path d="M63.9075 31.0782V13.3482C63.9134 12.4439 63.6578 11.5571 63.1715 10.7947C62.6851 10.0322 61.9888 9.42659 61.1663 9.0507C52.3295 5.19214 42.777 3.24459 33.135 3.3357C23.4942 3.24489 13.9431 5.19244 5.1075 9.0507C4.28497 9.42659 3.58862 10.0322 3.10228 10.7947C2.61593 11.5571 2.36034 12.4439 2.36625 13.3482V37.3782C2.36581 44.9733 4.66728 52.3902 8.96717 58.6509C13.2671 64.9117 19.3635 69.7222 26.4525 72.4482L29.7375 73.712C31.0328 74.2104 32.4219 74.4178 33.8063 74.3195M31.5788 62.9569C26.0934 61.2062 21.3004 57.7691 17.8826 53.1353C14.4647 48.5014 12.5964 42.9071 12.5438 37.1494V15.8269C18.966 13.7608 25.6724 12.7144 32.4188 12.7257H33.8888C40.6362 12.7159 47.3431 13.7675 53.7638 15.8419V37.1494M12.72 40.2919L45.2626 14.0607M19.11 54.6319L53.73 26.7244M56.6963 48.4444L65.1338 54.0694L73.5713 48.4444M65.1338 87.8194V42.8194M56.6963 82.1944L65.1338 76.5694L73.5713 82.1944M82.0088 56.8819L76.3838 65.3194L82.0088 73.7569M42.6338 65.3194H87.6338M48.2588 56.8819L53.8838 65.3194L48.2588 73.7569" stroke="#F5F5F5" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="whitespace-nowrap mt-6">Frozen & Chilled</span>
        </div>
      </div>
    </div>

    <div class="py-24 bg-gray-100"> <!-- testimonials -->
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold px-4 md:px-24">Testimonials</h1>
        <p class="text-sm md:text-xl font-light font-raleway mt-6 px-4 md:px-24">See what our clients have to say about us</p>
      </div>
      <div class="mt-8"> <!-- infinte scroller -->
        <div class="scroller overflow-hidden">
            <ul class="tag-list scroller__inner">
              <li class="w-[280px] h-[360px] md:w-[620px] md:h-[236px] bg-white p-8">
                <div class="flex flex-col justify-between h-full">
                  <p class="font-semibold text-base md:text-xl">My experience with Hijra shipping & forwarding has been of good service and compliance. They are always checking status and following up all our shipments. Customs clearance is on time and we never have to rush. Thank you!</p>
                  <p class="font-light font-raleway text-sm md:text-base">Jacob</p>
                </div>
              </li>
              <li class="w-[280px] h-[360px] md:w-[620px] md:h-[236px] bg-white p-8">
                <div class="flex flex-col justify-between h-full">
                  <p class="font-semibold text-base md:text-xl">Hijra Shipping has been amazing for the growth of our business from start to finish. They walked us through all our shipping and logistics options with clarity and 100% transparency. Customer service and availability is superb.</p>
                  <p class="font-light font-raleway text-sm md:text-base">Faizal</p>
                </div>
              </li>
              <li class="w-[280px] h-[360px] md:w-[620px] md:h-[236px] bg-white p-8">
                <div class="flex flex-col justify-between h-full">
                  <p class="font-semibold text-base md:text-xl">I am extremely satisfied with the logistics services provided by Hijra Shipping. Their commitment to timely deliveries and outstanding customer support have consistently exceeded our expectations.</p>
                  <p class="font-light font-raleway text-sm md:text-base">Jithin</p>
                </div>
              </li>
              <li class="w-[280px] h-[360px] md:w-[620px] md:h-[236px] bg-white p-8">
                <div class="flex flex-col justify-between h-full">
                  <p class="font-semibold text-base md:text-xl">Always receive our shipments on time, Thank you Hijra Shipping & Forwarding.</p>
                  <p class="font-light font-raleway text-sm md:text-base">Anna</p>
                </div>
              </li>
              <li class="w-[280px] h-[360px] md:w-[620px] md:h-[236px] bg-white p-8">
                <div class="flex flex-col justify-between h-full">
                  <p class="font-semibold text-base md:text-xl">Whether it be imports or exports, you always provide exceptional and fast service. Thank you for all your efforts and we will continue to rely upon your services to expand our products to new parts of the world</p>
                  <p class="font-light font-raleway text-sm md:text-base">Nithin</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeImage from '../components/HomeImage.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HomeImage,
    Footer
  },
  data() {
    return {
      img1Hovered: false,
      img2Hovered: false,
      img3Hovered: false,
      img4Hovered: false,
      img5Hovered: false,
    };
  },
  mounted() {
    this.handleTestimonialScrol()
  },
  methods: {
    handleTestimonialScrol() {
      const scrollers = document.querySelectorAll(".scroller")
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true)
          duplicatedItem.setAttribute('aria-hidden', true)
          scrollerInner.appendChild(duplicatedItem)
        })
      })
    }
  },
}
</script>

<style scoped>

.bg-blur {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(3.6302521228790283px);
  transition: background 0.3s; /* Add a smooth transition effect */
}

.scroller__inner {
  width: max-content;
  display: flex;
  gap: 20px;
  animation: scroll 50s linear infinite;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 10px));
  }
}

</style>
