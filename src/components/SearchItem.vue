<template>
    <div class="search-item dropdown is-right"
         :class="isActiveSearch ? 'is-active' : ''"
    >
        <div class="control has-icons-left has-icons-right dropdown-trigger">
            <input
                    ref="searchInputRef"
                    class="input is-rounded"
                    type="text"
                    :placeholder="$t('textSearch')"
                    v-model="textSearch"
                    @focus.self="focusSearchInput"
                    @blur.self="blurSearchInput"
            >
            <span class="icon is-left"><i class="fa fa-search"></i></span>
            <span class="icon is-right clear-text-search"
                  style="pointer-events: all; cursor: pointer"
                  v-show="textSearch.length > 0"
                  @click="textSearch = ''"
            >
                <i class="fa fa-close"></i>
            </span>
        </div>
        <div class="dropdown-menu" id="dropdown-menu2" role="menu">
            <div class="dropdown-content">
                <SearchPopup
                        :data="dataSearchs"
                        @clickChoice="clickedChoiceSearchItem"
                        v-click-outside="doClickOutsideSearchPopup"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { doAlgoliaSearch } from '../plugins/algoliasearch'
import SearchPopup from "./SearchPopup"

export default {
    name: "SearchItem",
    components: {SearchPopup},
    data () {
        return {
            isActiveSearch: false,
            textSearch: '',
            dataSearchs: [],
            focusflag: false
        }
    },
    methods: {
        clickedChoiceSearchItem(dataSearch) {
            this.isActiveSearch = false
            this.textSearch = ''
            this.$emit('close')
        },
        focusSearchInput() {
            this.focusflag = true
            if (this.dataSearchs .length > 0) {
                this.isActiveSearch = true
            }
        },
        blurSearchInput() {
            this.focusflag = false
        },
        doClickOutsideSearchPopup() {
            if (!this.focusflag) {
                this.isActiveSearch = false
                this.focusflag = false
            }
        },
        focusSearch() {
            this.$refs.searchInputRef.focus()
        }
    },
    mounted() {
        if (!this.$isDesktop) {
            this.focusSearch()
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

<style lang="scss" scoped>
.search-item {
    .clear-text-search {
        cursor: pointer;
    }
}
</style>
