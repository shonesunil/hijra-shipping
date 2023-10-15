<template>
    <div class="px-4 py-5 md:py-0 font-raleway">
        <img class="hidden md:block h-[80vh] w-full object-cover brightness-50" src="../../assets/freight/freight-main.jpg" alt="">
        <div class="flex flex-nowrap overflow-x-auto md:hidden">
            <div class="shrink-0 h-[260px] md:h-[85vh] w-full mr-2">
            <img class="w-full h-full object-cover" src="../../assets/freight/freight-main.jpg" alt="">
            </div>
            <div class="shrink-0 h-[260px] md:h-[85vh] w-full mr-2">
            <img class="w-full h-full object-cover" src="../../assets/freight/freight-2.jpg" alt="">
            </div>
            <div class="shrink-0 h-[260px] md:h-[85vh] w-full mr-2">
            <img class="w-full h-full object-cover object-left" src="../../assets/freight/freight-4.jpg" alt="">
            </div>
        </div>
        <div class="md:flex justify-between md:pl-24">
            <div class="my-10 md:mt-16 md:mb-60 md:mr-40 basis-2/3">
                <h1 class="font-playfair text-[28px] md:text-5xl font-semibold">Freight (Sea/Air)</h1>
                <div class="mt-6 md:mt-10 text-justify text-sm md:text-lg font-light">
                    <h1 class="font-playfair font-semibold text-lg md:text-[28px]">Sea Freight</h1>
                    <p class="mt-4 md:mt-5">We also provide comprehensive ocean services including FCL (Full Container Load) LCL (Loose cargo), Break Bulk, and RO-RO shipments from anywhere in the world to any destination through carefully selected global agency network and at the most competitive rates. We are associated with leading shipping lines for cargo movements from all the major ports of North & South America, Europe, Africa, the Middle East, South East Asia, the Far East, China, and Japan. This enables us to offer our valued customers quality service with the weekly sailing schedule with guaranteed space.</p>
                    <h1 class="mt-10 font-playfair font-semibold text-lg md:text-[28px]">Air Freight</h1>
                    <p class="mt-4 md:mt-5">Hijra Shipping Air freight offers rates contracts with major airlines, import & exports consolidation connecting major airports, hand delivery & express door delivery services Our specialist handles your hazardous cargo for import & export through Abu Dhabi, Dubai, and Sharjah Airports. Import & Export Air freight is always our top priority, supported by global air shipment handling agency networks.</p>
                </div>
            </div>
            <div class="hidden mt-7 mr-12 md:grid grid-flow-row grid-cols-10 basis-1/3">
                <div class="col-span-9 col-start-2 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover object-left rounded-lg" src="../../assets/freight/freight-2.jpg" alt="">
                </div>
                <div class="col-span-10 mt-7 rounded-lg overflow-hidden">
                    <img class="w-full rounded-lg" src="../../assets/freight/freight-4.jpg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'FreightView'
    }
</script>

<style scoped>

</style>