import { GSAP } from '../NodeModules.js';

export const projectRoute = {

  template:  `<div class="project">
                <template v-once>
                  <span
                    ref="backButton"
                    class="back-button-wrapper"
                  >
                    <back-button/>
                  </span>

                  <div
                    ref="headings"
                    class="project__headings"
                  >
                    <h1 v-html="heading1"></h1>
                    <h2 v-html="heading2"></h2>
                  </div>

                  <div
                    ref="clients"
                    class="project__clients"
                  >
                    <div><strong>Opdrachtgevers</strong></div>
                    <ul>
                      <li
                        v-for="client of clients"
                        v-html="client"
                      ></li>
                    </ul>
                  </div>
                </template>
              </div>`,

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
            startTime = duration * 0,
            opacityDelay = duration * 0.3,
            timings = {
              headingTransformStart: startTime,
              headingOpacityStart: startTime + 1 * opacityDelay,
              clientsOpacityStart: startTime + 2 * opacityDelay,
            },
            endTime = Math.max(...Object.values(timings)),
            backButtonTransformStart = endTime - opacityDuration/5,
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
        timings.headingTransformStart,
      );

      tl.fromTo(this.$refs.headings, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        timings.headingOpacityStart,
      );

      tl.fromTo(this.$refs.clients, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        timings.clientsOpacityStart,
      );

      tl.fromTo(this.$refs.backButton, transformDuration * 1.25,
        {
          x: 12,
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

      tl.fromTo(this.$refs.backButton, opacityDuration * 1.25,
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