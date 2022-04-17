<template>
    <div v-for="(postGroup, index) in posts"
         :key="index"
         class="tile is-ancestor">
        <div v-for="(post) in postGroup"
             :key="post.slug"
             class="tile is-parent is-3">
            <router-link class="content is-medium"
                         :to="/blog/ + post.slug"
            >
                <article class="tile is-child box">

                        <h1 class="title has-text-black is-4">{{ post.title }}</h1>
                        <h5 class="subtitle is-6 has-text-grey">{{ new Date(post.updated).toLocaleDateString() }}</h5>
                        <span class="content"><p class="has-text-dark is-size-6">{{ post.summary }}</p></span>
                </article>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Articles",
    props: {
        posts: Array
    }
}
</script>

<style scoped>

</style>
