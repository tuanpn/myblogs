<template>
    <div class="container mt-5" @scroll="handleScroll">
        <articles
                :posts="posts"
        />
        <div class="button is-loading is-large" style="width: 100%; border: none" v-if="loading"></div>
    </div>
</template>

<script>
import Articles from "../components/post/Articles"
import { butter } from '../plugins/buttercms'
const PAGING_SIZE = 8

export default {
    name: "BlogTopic",
    components: {
        Articles
    },
    data() {
        return {
            posts: [],
            pageCurrent: 0,
            loading: true,
            isAlreadyGetAllPost: false
        }
    },
    methods: {
        getPosts(page, pageSize) {
            if (this.$route.name.includes('blog')) {
                return
            }
            if (this.isAlreadyGetAllPost) {
                return
            }
            this.loading = true
            this.pageCurrent = page
            let posts = this.posts
            butter.post.list({
                page: page,
                page_size: pageSize,
                category_slug: this.$route.name
            }).then(res => {
                if (!res || !res.data || !res.data.data) {
                    this.isAlreadyGetAllPost = true
                    this.loading = false
                    return
                }
                let array = res.data.data
                for (let i = 0; i < array.length; i ++) {
                    posts.push(array[i])
                }
                this.$store.commit('saveLastPosts', {category: this.$route.name, posts: posts})
                this.$store.commit('setCurrentCategory', this.$route.name)
                this.posts = posts
                this.loading = false
                this.isAlreadyGetAllPost = false
            }).catch(() => {
                this.isAlreadyGetAllPost = true
                this.loading = false
            })
        },
        handleScroll (el) {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
                    + window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    this.getPosts(this.pageCurrent + 1, PAGING_SIZE)
                }
            }
        },
        handleInitPosts() {
            let lastPosts = this.$store.getters.getLastPostByCategory(this.$route.name)
            if (lastPosts && lastPosts.length > 0) {
                this.loading = false
                this.posts = lastPosts
                this.pageCurrent = Math.floor(lastPosts.length / PAGING_SIZE) + 1
                this.$store.commit('setCurrentCategory', this.$route.name)
            } else {
                this.isAlreadyGetAllPost = false
                this.posts = []
                this.getPosts(1, PAGING_SIZE)
            }
        }
    },
    created () {
        this.handleScroll()
        this.handleInitPosts()
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        $route (to, from) {
            this.handleInitPosts()
        }
    }
}
</script>

<style scoped>

</style>
