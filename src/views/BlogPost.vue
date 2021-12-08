<template>
    <div id="blog-post"
         class="container">
        <div class="button is-loading is-large" style="width: 100%; border: none" v-if="loading"></div>
        <div class="column is-11-mobile
                          is-10-tablet is-offset-1-tablet
                          is-8-desktop is-offset-2-desktop
                          is-8-widescreen is-offset-2-widescreen
                          is-8-fullhd is-offset-2-fullhd">
            <h1 class="is-size-2 is-primary has-text-primary">{{ post.title }}</h1>
            <h4 class="has-text-info">{{ post.author.first_name }} {{ post.author.last_name }}</h4>
                <span v-if="post.updated">{{ new Date(post.updated).toLocaleDateString() }}</span>
            <div class="mt-5"></div>
            <div v-html="post.body"></div>
            <div class="mb-6"></div>
        </div>
    </div>
</template>

<script>
import { butter } from '../plugins/buttercms'

export default {
    name: "BlogPost",
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
                    this.loading = false
                }).catch(res => {
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
