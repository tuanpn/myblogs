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
                    <div class="navbar-item">
                        <div class="dropdown is-right"
                             :class="isActiveSearch ? 'is-active' : ''"
                        >
                            <div class="control has-icons-left dropdown-trigger">
                                <input
                                        class="input is-rounded"
                                        type="text"
                                        :placeholder="$t('textSearch')"
                                        v-model="textSearch"
                                        @focus="focusSearchInput"
                                        @blur="blurSearchInput"
                                >
                                <span class="icon is-left"><i class="fa fa-search"></i></span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                <div class="dropdown-content">
                                    <SearchPopup
                                        :data="dataSearchs"
                                        @clickChoice="clickedChoiceSearchItem"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { doAlgoliaSearch } from '../plugins/algoliasearch'
import SearchPopup from "./SearchPopup"

export default {
    name: "Navbar",
    components: {SearchPopup},
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
            }],
            isActive: false,
            textSearch: '',
            isActiveSearch: false,
            dataSearchs: [],
            focusflag: false
        }
    },
    methods: {
        clickNavbarItem (tab) {
            this.currentTab = tab.key
            this.isActive = false
        },
        doClickOutsideNav () {
            if (this.isActive) this.isActive = false
        },
        clickedChoiceSearchItem(dataSearch) {
            this.isActiveSearch = false
        },
        focusSearchInput() {
            this.focusflag = true
            if (this.dataSearchs .length > 0) {
                this.isActiveSearch = true
            }
        },
        blurSearchInput() {
            this.focusflag = false
            this.isActiveSearch = false
        }
    },
    watch: {
        textSearch: function (text) {
            if (text.length > 0) {
                doAlgoliaSearch(text, (hits) => {
                    this.dataSearchs = hits
                    this.isActiveSearch = true
                })
            } else {
                this.isActiveSearch = false
                this.dataSearchs = []
            }
        }
    }
}
</script>

<style scoped>
nav.navbar {
    height: 6rem !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) !important;
}
.dropdown-content {
    padding-bottom: 0;
}
</style>
