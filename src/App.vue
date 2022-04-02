<template>
  <navbar/>
  <div class="main">
    <router-view/>
    <modal :show="$showModal.value" @close="$showModal.value = false">
      <template #body>
        <search-item
                @close="$showModal.value = false"/>
      </template>
    </modal>
  </div>
  <footer-blogs/>
</template>

<script>
import Navbar from "./components/Navbar"
import FooterBlogs from "./components/FooterBlogs"
import Modal from './components/Modal.vue'
import SearchItem from "./components/SearchItem"

export default {
  components: {
    Navbar,
    FooterBlogs,
    Modal,
    SearchItem
  }
}
</script>

<style lang="scss">
.main {
  position: relative;
}
</style>
