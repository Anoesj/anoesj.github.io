import { GSAP } from '../NodeModules.js';

export const projectRoute = {

  methods: {
    async animateIn (el, done, initial = false) {
      await this.animation(this.$root.transitionDuration / 2);

      done();
    },

    async animateOut (el, done) {
      await this.animation(this.$root.transitionDuration / 4, true);
      done();
    },

    async animation (duration, reverse = false) {
      const tl = new GSAP.TimelineLite();

      const transformDuration = duration * 1.3,
            opacityDuration = duration * 1.2,
            headingsTransformStart = duration * 0,
            opacityDelay = duration * 0.3,
            headingOpacityStart = headingsTransformStart + opacityDelay,
            backButtonTransformStart = headingOpacityStart + opacityDuration / 20,
            backButtonOpacityStart = backButtonTransformStart + opacityDelay;

      tl.fromTo(this.$refs.headings, transformDuration,
        {
          x: -60,
          scale: 0.97,
          rotation: this.$root.angle,
          skewX: 3,
        },
        {
          x: 0,
          scale: 1,
          rotation: this.$root.angle,
          skewX: 0,
          transformOrigin: 'center center',
          ease: GSAP.Power3.easeInOut,
        },
        headingsTransformStart,
      );

      tl.fromTo(this.$refs.headings, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        headingOpacityStart,
      );

      tl.fromTo(this.$refs.backButton, transformDuration,
        {
          x: 30,
          scale: 0.97,
          rotation: this.$root.angle,
          skewX: -3,
        },
        {
          x: 0,
          scale: 1,
          rotation: this.$root.angle,
          skewX: 0,
          transformOrigin: 'center center',
          ease: GSAP.Power3.easeInOut,
        },
        backButtonTransformStart,
      );

      tl.fromTo(this.$refs.backButton, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        backButtonOpacityStart,
      );

      await new Promise((resolve) => {
        if (reverse === true) {
          tl.eventCallback('onReverseComplete', resolve);
          tl.reverse(0, false);
        }
        else {
          tl.eventCallback('onComplete', resolve);
          tl.play();
        }
      });
    },
  },

};