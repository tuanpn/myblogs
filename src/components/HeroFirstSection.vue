<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column
                    is-8 is-offset-2
                    is-0-mobile">
                        <figure class="image is-16by9">
                            <img :src="require(`@/assets/${srcImage}`)" alt="">
                        </figure>
                    </div>
                </div>
                <section v-if="postFirst" class="section">
                    <div class="columns">
                        <div class="column is-12-mobile is-offset-0-mobile is-8 is-offset-2">
                            <router-link class="content is-medium"
                                         :to="/blog/ + postFirst.slug"
                            >
                                <div class="content is-medium">
                                    <h2 class="subtitle is-4">{{ new Date(postFirst.updated).toDateString() }}</h2>
                                    <h1 class="title">{{ postFirst.title }}</h1>
                                    <p class="has-text-dark">{{ postFirst.summary }}</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </section>

                <div class="is-divider"></div>

                <section v-if="postSecond" class="section">
                    <div class="columns">
                        <div class="column is-12-mobile is-offset-0-mobile is-8 is-offset-2">
                            <router-link class="content is-medium"
                                         :to="/blog/ + postSecond.slug"
                            >
                                <div class="content is-medium">
                                    <h2 class="subtitle is-4">{{ new Date(postSecond.updated).toDateString() }}</h2>
                                    <h1 class="title">{{ postSecond.title }}</h1>
                                    <p class="has-text-dark">{{ postSecond.summary }}</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HeroFirstSection",
        props: {
            srcImage: String,
            postFirst: Object,
            postSecond: Object
        }
    }
</script>

<style scoped>

</style>
