import { GSAP } from '../NodeModules.js';

export const Project = {

  props: {
    clients: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  template:  `<div class="project" v-once>
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
                  <h1><slot name="heading1"></slot></h1>
                  <h2><slot name="heading2"></slot></h2>
                </div>

                <div
                  v-if="hasClients"
                  ref="clients"
                  class="project__clients"
                >
                  <div><strong>{{ clients.length > 1 ? 'Opdrachtgevers' : 'Opdrachtgever' }}</strong></div>
                  <ul>
                    <li
                      v-for="client of clients"
                      v-html="client"
                    ></li>
                  </ul>
                </div>

                <div
                  v-if="$slots.content"
                  ref="content"
                  class="project__content"
                >
                  <hr/>
                  <slot
                    name="content"
                  ></slot>
                </div>
              </div>`,

  computed: {
    hasClients () {
      return this.clients && this.clients.length > 0;
    },
  },

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
              headingTransformStart: startTime + 0 * opacityDelay,
              headingOpacityStart: startTime + 1 * opacityDelay,
              ...(this.$refs.clients) ? { clientsOpacityStart: startTime + 2 * opacityDelay } : {},
              ...(this.$refs.content) ? { contentOpacityStart: startTime + (this.hasClients ? 3 : 2) * opacityDelay } : {},
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

      if (this.hasClients) {
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
      }

      if (this.$refs.content) {
        tl.fromTo(this.$refs.content, opacityDuration,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: GSAP.Power2.easeInOut,
          },
          timings.contentOpacityStart,
        );
      }

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