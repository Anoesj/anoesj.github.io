import { GSAP } from '../NodeModules.js';

// if ('paintWorklet' in CSS) {
//   CSS.paintWorklet.addModule('/js/misc/marker.js');
// }

export const navigation = {

  debugTag: 'navigation',
  debugColor: 'navy',

  props: [
    'visible',
  ],

  template:  `<transition
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
              </transition>`,

  methods: {
    async animateIn (el, done) {
      this.$log('animateIn');

      const pagePadding = this.getPagePadding(),
            duration = this.$root.transitionDuration/2,
            easing = GSAP.Power3.easeOut,
            distanceFromOuterEdge = -1 * pagePadding * 0.25,
            tl = new GSAP.TimelineLite();

      tl.from(this.$refs.left, duration, {
        left: distanceFromOuterEdge,
        ease: easing,
        clearProps: 'all',
      }, 0);

      tl.from(this.$refs.right, duration, {
        right: distanceFromOuterEdge,
        ease: easing,
        clearProps: 'all',
      }, 0);

      tl.from(this.$refs.bottom, duration, {
        bottom: distanceFromOuterEdge,
        ease: easing,
        clearProps: 'all',
      }, 0);

      tl.from(el, duration, {
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

};