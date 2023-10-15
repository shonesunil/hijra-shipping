<template>
  <!-- <Landing v-if="showLandingPage" @fade-out-landing="fadeOutLanding" /> -->
  <!-- <HeaderCmp /> -->
  <TestHeader />
  <router-view/>
  <Footer></Footer>
</template>

<script>
  import HeaderCmp from './components/Header.vue'
  import TestHeader from './components/TestHeader.vue'
  import Footer from './components/Footer.vue'
  import Landing from './components/Landing.vue'

  export default {
  name: 'App',
  components: {
    HeaderCmp,
    Footer,
    Landing,
    TestHeader
  },
  data() {
    return {
      showLandingPage: true
    }
  },
  methods: {
    fadeOutLanding() {
      const body = document.querySelector('#main')
      body.classList.remove('overflow-hidden')
      setTimeout(() => {
        this.showLandingPage = false;
      }, 500);
    }
  }
}
</script>

<style>

::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

::-webkit-scrollbar-track {
  background: #5c5a58;
} 

::-webkit-scrollbar-thumb {
  background: #aaa9a6;
  border-radius: 40px;
}

::-webkit-scrollbar-thumb:hover {
  background: #bebdba;
}

body {
  background-color: #F1F1F1;
}

@supports (scrollbar-color: #aaa9a6 #5c5a58) {
  * {
    scrollbar-color: #aaa9a6 #5c5a58;
    scrollbar-width: thin;
  }
}

</style>
