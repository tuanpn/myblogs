<template>
  <navbar/>
  <router-view/>
  <footer-blogs/>
</template>

<script>
import Navbar from "./components/Navbar"
import FooterBlogs from "./components/FooterBlogs"

export default {
  components: {
    Navbar,
    FooterBlogs
  }
}
</script>

<style lang="scss">
</style>
