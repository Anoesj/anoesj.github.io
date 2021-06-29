<template>
  <transition @enter="animateIn">
    <nav class="navigation" v-if="visible === true">
      <div class="left" ref="left">
        <router-link to="/who"><span class="highlight-wrapper">Who?</span></router-link>
      </div>
      <div class="bottom" ref="bottom">
        <router-link to="/projects"><span class="highlight-wrapper">Projects</span></router-link>
      </div>
      <div class="right" ref="right">
        <router-link to="/reach-me"><span class="highlight-wrapper">Reach me</span></router-link>
      </div>
    </nav>
  </transition>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { gsap, Power3 } from 'gsap';
  // import { CustomEase } from 'gsap/CustomEase';

  // CustomEase.create('smooth', 'M0,0 C0,0 0.185,0.063 0.244,0.118 0.43,0.292 0.419,0.6 0.542,0.784 0.696,1.014 1,1 1,1');

  // if ('paintWorklet' in CSS) {
  //   CSS.paintWorklet.addModule('/js/misc/marker.js');
  // }

  export default defineComponent({

    debugTag: 'navigation',
    debugColor: 'navy',

    props: [
      'visible',
    ],

    inject: [
      'transitionDuration',
      'getCSSVariable',
    ],

    methods: {
      async animateIn (el, done) {
        this.$log('animateIn');

        const pagePadding = this.getPagePadding(),
              duration = this.transitionDuration/2,
              ease = 'smooth',
              distanceFromOuterEdge = -1 * pagePadding * 0.25,
              tl = gsap.timeline();

        tl.from(this.$refs.left, {
          duration,
          left: distanceFromOuterEdge,
          ease,
          clearProps: 'all',
        }, 0);

        tl.from(this.$refs.right, {
          duration,
          right: distanceFromOuterEdge,
          ease,
          clearProps: 'all',
        }, 0);

        tl.from(this.$refs.bottom, {
          duration,
          bottom: distanceFromOuterEdge,
          ease,
          clearProps: 'all',
        }, 0);

        tl.from(el, {
          duration,
          opacity: 0,
          ease: Power3.easeInOut,
          clearProps: 'all',
        }, 0);

        await new Promise((resolve) => {
          tl.eventCallback('onComplete', resolve);
          tl.play();
        });

        this.$log('done with animateIn');
        done();
      },

      getPagePadding () {
        return parseInt(this.getCSSVariable('--page-padding'));
      },
    },

  });
</script>