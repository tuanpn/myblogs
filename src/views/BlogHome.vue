<template>
    <div class="home-page">
        <section id="colored-dna-back" class="hero is-white is-medium">
            <div id="particles-js"></div>
            <introduce-section
                @scrollToTechnology="scrollToTechnology"
            />
        </section>

        <last-post-section/>

        <left-image-section
            ref="technologySectionRef"
            :title="$t('technology')"
            :content="$t('technologyContent')"
            to="technology"
        />

        <right-image-section
            :title="$t('economic')"
            :content="$t('economicContent')"
            to="economic"
        />

        <left-image-section
                :title="$t('philosophy')"
                :content="$t('philosophyContent')"
                to="philosophy"
        />

        <right-image-section
                :title="$t('orography')"
                :content="$t('orographyContent')"
                to="orography"
        />

        <slogan-section/>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import 'aos/dist/aos.css';
import AOS from 'aos';
import particles from '../assets/particles.json'
import IntroduceSection from "../components/home/IntroduceSection"
import LeftImageSection from "../components/home/LeftImageSection"
import RightImageSection from "../components/home/RightImageSection"
import SloganSection from "../components/home/SloganSection"
import LastPostSection from "../components/home/LastPostSection"

export default {
    name: "BlogHomes",
    components: {LastPostSection, SloganSection, RightImageSection, LeftImageSection, IntroduceSection},
    mounted() {
        AOS.init({
            once: true
        })
        let typewriter = new Typewriter('#typewriter', {
            autoStart: true
        });
        typewriter
            .typeString("<strong>Tri thức </strong> là sức mạnh. ")
            .pauseFor(1000)
            .start();
        this.$nextTick(() => {
            window.particlesJS('particles-js', particles)
        })
    },
    methods: {
        scrollToTechnology() {
            this.$refs.technologySectionRef.scrollIntoView()
        }
    }
}
</script>

<style scoped>
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
