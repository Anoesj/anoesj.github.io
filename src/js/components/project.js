import { GSAP } from '../NodeModules.js';

export const Project = {

  props: {
    headerImg: {
      type: String,
      required: true,
    },
    clients: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  template:  `<div class="project" v-once>
                <img
                  ref="headerImage"
                  class="project__header-img"
                  :src="headerImg"
                />

                <span
                  ref="backButton"
                  class="back-button-wrapper"
                >
                  <BackButton/>
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

                <hr ref="preContactBlockHr"/>

                <ContactBlock ref="contact"/>
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

      let i = 0;

      const transformDuration = duration * 1.3,
            opacityDuration = duration * 1.2,
            startTime = duration * 0,
            opacityDelay = duration * 0.3,
            timings = {};

      timings.headingTransformStart = startTime + i * opacityDelay;
      i++;

      timings.headingOpacityStart = startTime + i * opacityDelay;
      i++;

      if (this.$refs.clients) {
        timings.clientsOpacityStart = startTime + i * opacityDelay;
        i++;
      }

      if (this.$refs.content) {
        timings.contentOpacityStart = startTime + i * opacityDelay;
        i++;
      }

      timings.preContactBlockHrOpacityStart = startTime + i * opacityDelay;
      i++;

      timings.contactOpacityStart = startTime + i * opacityDelay;
      i++;

      const endTime = Math.max(...Object.values(timings)),
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

      tl.fromTo(this.$refs.headerImage, transformDuration,
        {
          opacity: 0,
        },
        {
          opacity: 0.12,
          ease: GSAP.Power3.easeInOut,
        },
        timings.headingTransformStart,
      );

      if (this.$refs.clients) {
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

      tl.fromTo(this.$refs.preContactBlockHr, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        timings.preContactBlockHrOpacityStart,
      );

      tl.fromTo(this.$refs.contact.$el, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        timings.contactOpacityStart,
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