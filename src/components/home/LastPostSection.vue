<template>
    <section class="hero is-white is-medium no-horizontal-padding">
        <div class="hero-body no-horizontal-padding is-flex no-padding-bottom">
            <div ref="lastPostContainerRef" class="columns is-2 is-mobile">
                <router-link class="column is-narrow"
                             :to="/blog/ + post.slug"
                             v-for="(post) in posts"
                             :key="post.slug"
                >
                    <div class="card post-card"
                         @mouseover="mouseOverCard"
                         @mouseleave="mouseLeaveCard"
                    >
                        <article class="card-content">

                            <h1 class="title has-text-black is-4">{{ post.title }}</h1>
                            <h5 class="subtitle is-6 has-text-grey">{{ new Date(post.updated).toLocaleDateString() }}</h5>
                            <span class="content"><p class="has-text-dark is-size-6">{{ post.summary }}</p></span>
                        </article>
                    </div>
                </router-link>
            </div>
            <div ref="lastPostContainerRef2" class="columns is-2 is-mobile" style="padding-left: 1.5rem">
                <router-link class="column is-narrow"
                             :to="/blog/ + post.slug"
                             v-for="(post) in posts"
                             :key="post.slug"
                >
                    <div class="card post-card"
                         @mouseover="mouseOverCard"
                         @mouseleave="mouseLeaveCard"
                    >
                        <article class="card-content">

                            <h1 class="title has-text-black is-4">{{ post.title }}</h1>
                            <h5 class="subtitle is-6 has-text-grey">{{ new Date(post.updated).toLocaleDateString() }}</h5>
                            <span class="content"><p class="has-text-dark is-size-6">{{ post.summary }}</p></span>
                        </article>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { butter } from '../../plugins/buttercms'

const fps = 40
const interval = 1000/fps

export default {
    name: "LastPostSection",
    data () {
        return {
            posts: [],
            start: null,
            widthContainer: 1000,
            now: null,
            then: Date.now(),
            animateID: null
        }
    },
    methods: {
        getPosts() {
            butter.post.list({
                page: 1,
                page_size: 5
            }).then(res => {
                if (!res || !res.data || !res.data.data) {
                    return
                }
                this.posts = res.data.data
            }).catch(() => {

            })
        },
        step(timestamp) {
            if (!this.start) this.start = timestamp;
            this.animateID = window.requestAnimationFrame(this.step)
            this.now = Date.now()
            let delta = this.now - this.then
            if (delta > interval) {
                this.then = this.now - (delta % interval)
                this.draw(timestamp)
            }
        },
        draw(timestamp) {
            const elapsed = timestamp - this.start
            let count = 0.03 * elapsed
            if (this.$refs.lastPostContainerRef && count < this.$refs.lastPostContainerRef.clientWidth) {
                this.$refs.lastPostContainerRef.style.transform = 'translateX(' + -count + 'px)'
                this.$refs.lastPostContainerRef2.style.transform = 'translateX(' + -count + 'px)'
            } else {
                this.start = timestamp
            }
        },
        mouseOverCard() {
            window.cancelAnimationFrame(this.animateID)
        },
        mouseLeaveCard() {
            this.animateID = window.requestAnimationFrame(this.step)
        }
    },
    mounted () {
        this.getPosts()
        this.widthContainer = this.$refs.lastPostContainerRef.clientWidth
        this.animateID = window.requestAnimationFrame(this.step);
    }
}
</script>

<style lang="scss" scoped>
.container-post {
    position: absolute;
}
.post-card {
    width: 400px;
    height: 308px;
    transition: transform .4s;
}
.post-card:hover {
    transform: scale(1.08);
}
</style>
