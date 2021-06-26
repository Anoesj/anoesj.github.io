<template>
  <transition
    @enter="animateIn"
  >
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

  // if ('paintWorklet' in CSS) {
  //   CSS.paintWorklet.addModule('/js/misc/marker.js');
  // }

  export default defineComponent({

    debugTag: 'navigation',
    debugColor: 'navy',

    props: [
      'visible',
    ],

    methods: {
      async animateIn (el, done) {
        this.$log('animateIn');

        const pagePadding = this.getPagePadding(),
              duration = this.$transitionDuration/2,
              easing = Power3.easeOut,
              distanceFromOuterEdge = -1 * pagePadding * 0.25,
              tl = gsap.timeline();

        tl.from(this.$refs.left, {
          duration,
          left: distanceFromOuterEdge,
          ease: easing,
          clearProps: 'all',
        }, 0);

        tl.from(this.$refs.right, {
          duration,
          right: distanceFromOuterEdge,
          ease: easing,
          clearProps: 'all',
        }, 0);

        tl.from(this.$refs.bottom, {
          duration,
          bottom: distanceFromOuterEdge,
          ease: easing,
          clearProps: 'all',
        }, 0);

        tl.from(el, {
          duration,
          opacity: 0,
          ease: easing,
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
        return parseInt(this.$getCSSVariable('--page-padding'));
      },
    },

  });
</script>