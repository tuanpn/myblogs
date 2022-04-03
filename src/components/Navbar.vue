<template>
    <nav class="navbar navbar-height">
        <div class="container"
             v-click-outside="doClickOutsideNav"
        >
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                    <img src="../assets/logo.png" alt="Logo">
                    <h2 class="ml-2 is-size-5 has-text-weight-semibold">{{ $t('titleWeb') }}</h2>
                </a>
                <a class="navbar-item is-hidden-desktop margin-left-auto"
                   @click="$showModal.value = true"
                >
                    <span class="icon is-left"><i class="fa fa-search"></i></span>
                </a>
                <span
                        class="navbar-burger burger"
                        :class="isActive ? 'is-active' : ''"
                        data-target="navbarMenu"
                        @click="isActive = !isActive"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu" :class="isActive? 'is-active' : ''">
                <div class="navbar-end">
                    <router-link
                            class="navbar-item is-size-5 has-text-weight-semibold"
                            v-for="(tab) in tabs"
                            :key="tab.key"
                            :class="{ 'is-active': currentTab === tab.key }"
                            :to="tab.url"
                            @click="clickNavbarItem(tab)">
                        {{ tab.name }}
                    </router-link>
                    <div class="navbar-item is-hidden-mobile">
                        <search-item/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import SearchItem from "./SearchItem"

export default {
    name: "Navbar",
    components: {SearchItem},
    data: function () {
        return {
            currentTab: 'home',
            tabs: [{
                name: 'Trang chủ',
                url: '/',
                key: 'home'
            }, {
                name: 'Công nghệ',
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
            }],
            isActive: false,
            showModal: false
        }
    },
    methods: {
        clickNavbarItem (tab) {
            this.currentTab = tab.key
            this.isActive = false
        },
        doClickOutsideNav () {
            if (this.isActive) this.isActive = false
        }
    }
}
</script>

<style scoped>
nav.navbar {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) !important;
}
.dropdown-content {
    padding-bottom: 0;
}
.navbar-burger {
    margin-left: unset;
}
.margin-left-auto {
    margin-left: auto;
}
</style>
