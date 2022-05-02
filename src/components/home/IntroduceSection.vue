<template>
    <div class="hero-body">
        <div class="container">
            <div class="columns  is-vcentered reverse-columns">
                <div class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-5-desktop is-offset-1-desktop
                          is-5-widescreen is-offset-1-widescreen
                          is-5-fullhd " data-aos="fade-down">
                    <h1 class="title titled is-1 mb-6 has-text-white">
                        {{ $t('title') }}
                    </h1>
                    <div class="buttons are-medium">
                        <a class="button is-primary is-rounded"
                           to="technology"
                           @click="$emit('scrollToTechnology')"
                        >
                            {{ $t('technology') }}...
                        </a>
                        <router-link class="button is-white is-rounded"
                                     to="/blog/me">
                            {{ $t('me') }}...
                        </router-link>
                    </div>
                </div>
                <div data-aos="fade-right" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-7-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                    <figure class="image is-4by3">
                        <img class="is-rounded" src="@/assets/me.jpg">
                    </figure>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IntroduceSection",

}
</script>

<style scoped>

</style>
