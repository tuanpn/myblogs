<template>
    <div class="right-aside mt-5">
        <div class="subtitle is-small"><span>{{ $t('lastBlogDay')}}</span></div>
        <ul class="mt-2">
            <li v-for="post in lastPosts"
                :key="post.slug"
                class="mt-1"
                :class="post.isCurrent ? 'current-post' : ''"
            >
                <router-link class="content is-small is-link"
                             :to="/blog/ + post.slug"
                >
                    <span class="is-3">{{ post.title }}</span>
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
        },
        currentPost () {
            return this.$store.state.currentPost
        }
    },
    methods: {
        handleChangeRoute () {
            if (this.$store.state.currentCategory) {
                this.lastPosts = this.$store.state.lastPostObj[this.$store.state.currentCategory]
                let lastPost = this.lastPosts.find(lastPost => lastPost.url === this.currentPost.url)
                if (lastPost) lastPost.isCurrent = true
            }
        }
    },
    watch: {
        currentCategory: {
            immediate: true,
            handler(to, from) {
                this.handleChangeRoute()
            }
        },
        currentPost: function (newVal, oldVal) {
            let lastPost = this.lastPosts?.find(lastPost => lastPost.url === this.currentPost.url)
            if (lastPost) lastPost.isCurrent = true
            let oldCurrentPost = this.lastPosts?.find(lastPost => lastPost.url === oldVal.url)
            if (oldCurrentPost) oldCurrentPost.isCurrent = false
        }
    }
}
</script>

<style lang="scss" scoped>
.right-aside {
    .current-post {
        a {
            color: chocolate;
        }
    }
}
</style>
