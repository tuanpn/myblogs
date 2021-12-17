<template>
    <div>
        <section id="colored-dna-back" class="hero is-white is-medium">
            <div id="particles-js"></div>
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
                                   @click="scrollToElement($refs.technologySectionRef)"
                                >
                                    {{ $t('technology') }}...
                                </a>
                                <router-link class="button is-primary is-rounded"
                                             to="me">
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
                                <img class="is-rounded" src="../assets/me.jpg">
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section ref="technologySectionRef" class="hero is-white is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns  is-vcentered">
                        <div data-aos="fade-left" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-4-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                            <figure class="image is-square">
                                <img src="../assets/undraw_Camera_re_cnp4.svg">
                            </figure>
                        </div>
                        <div data-aos="fade-down" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-5-desktop is-offset-1-desktop
                          is-5-widescreen is-offset-1-widescreen
                          is-5-fullhd is-offset-1-fullhd">
                            <h1 class="titled title is-1 mb-6">{{ $t('technology') }}</h1>
                            <h2 class="subtitled subtitle">{{ $t('technologyContent') }}</h2>
                            <router-link class="button has-text-link"
                                         to="technology">
                                {{ $t('more') }}
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </section>

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
                                {{ $t('economic') }}
                            </h1>
                            <h2 class="subtitle subtitled">
                                {{ $t('economicContent') }}
                            </h2>
                            <router-link class="button has-text-link"
                                         to="economic">
                                {{ $t('more') }}
                            </router-link>
                        </div>
                        <div data-aos="fade-down" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-4-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                            <figure class="image is-square">
                                <img src="../assets/undraw_Camera_re_cnp4.svg">
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-white is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns  is-vcentered">
                        <div data-aos="fade-left" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-4-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                            <figure class="image is-square">
                                <img src="../assets/undraw_Camera_re_cnp4.svg">
                            </figure>
                        </div>
                        <div data-aos="fade-down" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-5-desktop is-offset-1-desktop
                          is-5-widescreen is-offset-1-widescreen
                          is-5-fullhd is-offset-1-fullhd">
                            <h1 class="titled title is-1 mb-6">{{ $t('philosophy') }}</h1>
                            <h2 class="subtitled subtitle">{{ $t('philosophyContent') }}</h2>
                            <router-link class="button has-text-link"
                                            to="philosophy">
                                {{ $t('more') }}
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </section>

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
                            <h1 class="title titled is-1 mb-6">{{ $t('orography') }}</h1>
                            <h2 class="subtitle subtitled">{{ $t('orographyContent') }}</h2>
                            <router-link class="button has-text-link"
                                         to="orography">
                                {{ $t('more') }}
                            </router-link>
                        </div>
                        <div data-aos="fade-down" class="column
                          is-12-mobile is-offset-0-mobile
                          is-10-tablet is-offset-1-tablet
                          is-4-desktop is-offset-1-desktop
                          is-4-widescreen is-offset-1-widescreen
                          is-4-fullhd is-offset-1-fullhd">
                            <figure class="image is-square">
                                <img src="../assets/undraw_Camera_re_cnp4.svg">
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-medium has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div data-aos="zoom-in-up" class="column is-8">
                            <h1 class="title titled is-1 mb-6">
                                <span id="typewriter"></span>
                            </h1>
                            <h2 class="subtitle subtitled">{{ $t('slogan')}}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import 'aos/dist/aos.css';
import AOS from 'aos';
import particles from '../assets/particles.json'

export default {
    name: "BlogHomes",
    mounted() {
        AOS.init({
            once: true
        })
        let typewriter = new Typewriter('#typewriter', {
            autoStart: true
        });
        typewriter
            .typeString("<strong>Tri thức </strong> là vô tận. ")
            .pauseFor(1000)
            .start();
        this.$nextTick(() => {
            window.particlesJS('particles-js', particles)
        })
    },
    methods: {
        scrollToElement(el) {
            if (el) {
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    }
}
</script>

<style scoped>
@media(max-width: 500px) {
    .reverse-columns {
        flex-direction: column-reverse;
        display: flex;
    }
}

.titled {
    font-family: 'Merriweather', serif !important;
    font-size: 58px !important;
    font-weight: 400 !important;
    line-height: 64px !important;
}

.subtitled {
    font-family: 'Merriweather', serif !important;
    font-size: 22px !important;
    font-weight: 400 !important;
    line-height: 36px !important;
}
#colored-dna-back {
    position: relative;
    /*background: url(../images/colored-dna.svg);*/
    background-position: center;
    background-size: cover;
    /*background-color: #212931;*/
}
#particles-js {
    position : absolute;
    background-color: #b61924;
    width: 100%;
    height: 100%;
}
</style>
