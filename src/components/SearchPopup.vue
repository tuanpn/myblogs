<template>
    <div class="search-popup card">
        <router-link
                v-for="(searchItem, index) in data"
                :key="searchItem.objectID + '-' + index"
                :to="/blog/ + searchItem.objectID"
                @click="$emit('clickChoice', searchItem)"
        >
            <div class="card">
                <div class="card-content">
                    <p class="title is-size-6 has-text-dark">
                        {{ searchItem.title }}
                    </p>
                    <div class="content is-size-6">
                        {{ searchItem.summary }}
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "SearchPopup",
    props: {
        data: Array
    },
    methods: {
        doClickOutside: function () {
            this.$emit('hide')
        }
    }
}
</script>

<style lang="scss" scoped>
.search-popup {
    width: 600px;
    max-height: 75vh;
    padding: 8px;
    overflow-y: auto;
    .card {
        margin: 8px 0;
    }
    .card:hover {
        background-color: hsl(0, 0%, 96%);
    }
}
</style>
