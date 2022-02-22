<template>
    <div class="container mt-5">
        <div class="button is-loading is-large" style="width: 100%; border: none" v-if="loading"></div>
        <articles
                :posts="posts"
        />
    </div>
</template>

<script>
import Articles from "../components/Articles"
import { butter } from '../plugins/buttercms'

export default {
    name: "BlogHomes",
    components: {
        Articles
    },
    data() {
        return {
            posts: [],
            loading: true
        }
    },
    methods: {
        getPosts() {
            if (this.$route.name.includes('blog')) {
                return
            }
            butter.post.list({
                page: 1,
                page_size: 10,
                category_slug: this.$route.name
            }).then(res => {
                let array = res.data.data
                let i,j
                let chunk = 3
                for (i = 0,j = array.length; i < j; i += chunk) {
                    this.posts.push(array.slice(i, i + chunk))
                }
                this.$store.commit('saveLastPosts', {category: this.$route.name, posts: array})
                this.$store.commit('setCurrentCategory', this.$route.name)
                this.loading = false
            })
        }
    },
    created () {
        this.getPosts()
    },
    watch: {
        $route (to, from) {
            this.posts = []
            this.getPosts()
        }
    }
}
</script>

<style scoped>

</style>
