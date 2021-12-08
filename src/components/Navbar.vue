<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                    <img src="../assets/logo.png" alt="Logo">
                    <h2 class="ml-2 is-size-5 has-text-weight-semibold">{{ $t('titleWeb') }}</h2>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
            </div>

            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="control has-icons-left">
                            <input class="input is-rounded" type="email" placeholder="Search">
                            <span class="icon is-left">
                            <i class="fa fa-search"></i>
                        </span>
                        </div>
                    </div>
                    <router-link
                            class="navbar-item is-size-5 has-text-weight-semibold"
                            v-for="(tab) in tabs"
                            :key="tab.key"
                            :class="{ 'is-active': currentTab === tab.key }"
                            :to="tab.url"
                            @click="currentTab = tab.key">
                        {{ tab.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data: function () {
        return {
            currentTab: 'home',
            tabs: [{
                name: 'Trang chủ',
                url: '/',
                key: 'home'
            }, {
                name: 'Khoa học công nghệ',
                url: '/technology',
                key: 'technology'
            }, {
                name: 'Kinh tế',
                url: '/economic',
                key: 'economic'
            }, {
                name: 'Triết học',
                url: '/philosophy',
                key: 'philosophy'
            }, {
                name: 'Văn học',
                url: '/orography',
                key: 'orography'
            }, {
                name: 'Tôi',
                url: 'me',
                key: 'me'
            }]
        }
    }
}
</script>

<style scoped>
nav.navbar {
    height: 6rem !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) !important;
}
</style>
