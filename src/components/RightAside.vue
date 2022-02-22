<template>
    <div class="right-aside mt-5">
        <div class="subtitle is-small"><span>{{ $t('lastBlogDay')}}</span></div>
        <ul class="mt-2">
            <li v-for="post in lastPosts"
                :key="post.slug"
                class="mt-1"
            >
                <router-link class="content is-small is-link"
                             :to="/blog/ + post.slug"
                >
                    <span class="has-text-link is-3">{{ post.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "RightAside",
    data: function() {
        return {
            lastPosts: []
        }
    },
    computed: {
        currentCategory () {
            return this.$store.state.currentCategory
        }
    },
    methods: {
        handleChangeRoute () {
            if (this.$store.state.currentCategory) {
                this.lastPosts = this.$store.state.lastPostObj[this.$store.state.currentCategory]
            }
        }
    },
    watch: {
        currentCategory: {
            immediate: true,
            handler(to, from) {
                this.handleChangeRoute()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.right-aside {
    a:visited {
        color: green;
    }
}
</style>
