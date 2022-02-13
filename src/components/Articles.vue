<template>
    <div v-for="(postGroup, index) in posts"
         :key="index"
         class="tile is-ancestor">
        <div v-for="(post) in postGroup"
             :key="post.slug"
             class="tile is-parent is-4">
            <article class="tile is-child box">
                <router-link class="content is-medium"
                             :to="/blog/ + post.slug"
                >
                    <h1 class="title has-text-black is-3">{{ post.title }}</h1>
                    <h2 class="subtitle is-5 has-text-grey">{{ new Date(post.updated).toLocaleDateString() }}</h2>
                    <div class="content"><p class="has-text-dark">{{ post.summary }}</p></div>
                </router-link>
            </article>
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
