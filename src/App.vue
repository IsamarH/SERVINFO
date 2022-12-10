<script setup>
import Nav from "./components/Nav.vue"
import Footer from  "./pages/Footer.vue"


</script>

<template>
  <div>
    <Nav/>
    <router-view></router-view>
  </div>
  <Footer/>
 
</template>