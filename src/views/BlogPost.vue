<template>
    <div id="blog-post"
         class="container mt-5">
        <div class="button is-loading is-large is-fullwidth" style="border: none" v-if="loading"></div>
        <div class="columns">
            <div class="column is-10-mobile is-offset-1-mobile
                          is-10-tablet is-offset-1-tablet
                          is-8-desktop is-offset-2-desktop
                          is-8-widescreen is-offset-2-widescreen
                          is-8-fullhd is-offset-2-fullhd">
                <h1 class="is-size-3 is-primary has-text-primary">{{ post.title }}</h1>
                <h4 class="has-text-info">{{ post.author.first_name }} {{ post.author.last_name }}</h4>
                <span class="is-size-6" v-if="post.updated">{{ new Date(post.updated).toLocaleDateString() }}</span>
                <div class="mt-5"></div>
                <span class="is-size-6" v-html="post.body"></span>
                <div class="mb-6"></div>
            </div>
            <div class="column is-2-desktop
                        is-12-mobile is-offset-1-mobile
                      is-12-tablet  is-offset-0-tablet">
                <right-aside/>
            </div>
        </div>
    </div>
</template>

<script>
import { butter } from '../plugins/buttercms'
import RightAside from "../components/RightAside"

export default {
    name: "BlogPost",
    components: {
        RightAside
    },
    data() {
        return {
            post: {
                title: '',
                author: {}
            },
            loading: true
        }
    },
    methods: {
        getPost() {
            butter.post.retrieve(this.$route.params.slug)
                .then(res => {
                    this.post = res.data.data
                    this.$store.commit('setCurrentPost', this.post)
                    this.loading = false
                    if (!this.$store.state.currentCategory) {
                        let category = this.post.categories[0]
                        this.addLastPosts(category.slug)
                    }
                }).catch(res => {
                    console.error(res)
            })
        },
        addLastPosts(category) {
            butter.post.list({
                page: 1,
                page_size: 10,
                category_slug: category
            }).then(res => {
                let array = res.data.data
                this.$store.commit('saveLastPosts', {category: category, posts: array})
                this.$store.commit('setCurrentCategory', category)
                this.loading = false
            })
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                this.getPost()
            }
        }
    }
}
</script>

<style scoped>

</style>
