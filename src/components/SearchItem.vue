<template>
    <div class="search-item dropdown is-right"
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

</style>
