<template>
    <section class="hero is-white is-medium">
        <div class="hero-body">
            <div class="container">
                <div class="columns  is-vcentered reverse-columns">
                    <div data-aos="fade-right" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-5-desktop is-offset-1-desktop
                          is-5-widescreen is-offset-1-widescreen
                          is-5-fullhd is-offset-1-fullhd">
                        <h1 class="title titled is-1 mb-6">
                            {{ title }}
                        </h1>
                        <h2 class="subtitle subtitled">
                            {{ content }}
                        </h2>
                        <router-link class="button has-text-link"
                                     :to="to">
                            {{ $t('more') }}
                        </router-link>
                    </div>
                    <div data-aos="fade-down" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-4-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                        <figure class="image is-4by3">
                            <img class="is-rounded" src="@/assets/me.jpg">
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RightImageSection",
    props: {
        title: String,
        content: String,
        to: String
    }
}
</script>

<style scoped>

</style>
