<template>
  <navbar/>
  <div class="main">
    <router-view/>
    <modal :show="$showModal.value"
           @close="$showModal.value = false"
    >
      <template #body>
        <search-item
                ref="searchItemRef"
                @close="$showModal.value = false"
        />
      </template>
    </modal>
  </div>
  <footer-blogs/>
</template>

<script>
import Navbar from "./components/main/Navbar"
import FooterBlogs from "./components/main/FooterBlogs"
import Modal from './components/global/Modal.vue'
import SearchItem from "./components/main/SearchItem"

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
