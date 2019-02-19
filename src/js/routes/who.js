import { GSAP } from '../NodeModules.js';

export const who = {

  debugTag: 'who',
  debugColor: 'red',

  template:  `<transition
                appear
                @enter="animateIn"
                @leave="animateOut"
              >
                <section class="who" :class="stateClass">
                  <img src="/img/me.jpg" class="me" ref="me">
                  <div class="right" ref="text">
                    <h1>Hi, I'm Anoesj</h1>
                  </div>
                </section>
              </transition>`,

  methods: {
    animateIn: async function (el, done) {
      this.$log('animateIn');

      await new Promise((resolve) => {
        // const timeline = GSAP.TimelineMax({});
        // TODO: omzetten naar GSAP.TimelineLite ofzo
        GSAP.TweenMax.fromTo(this.$refs.me, this.$root.transitionDuration,
          {
            scale: 0,
            opacity: 0,
            rotation: -120,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: this.$root.angle,
            ease: GSAP.Power3.easeInOut,
          },
        );

        GSAP.TweenMax.fromTo(this.$refs.text, this.$root.transitionDuration * 0.75,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: GSAP.Power2.easeInOut,
          },
        ).delay(this.$root.transitionDuration * 0.8);

        GSAP.TweenMax.fromTo(this.$refs.text, this.$root.transitionDuration * 1.5,
          {
            x: -50,
            rotation: this.$root.angle,
          },
          {
            x: 0,
            rotation: this.$root.angle,
            ease: GSAP.Power4.easeInOut,
            onComplete: resolve,
          },
        ).delay(this.$root.transitionDuration * 0.2);
      });

      // await new Promise(resolve => {
      //   this.$refs.text.addEventListener('transitionend', resolve);
      //   this.stateClass = 'active';
      // });

      this.$log('done with animateIn');
      done();
    },

    animateOut: async function (el, done) {
      console.log('animateOut');

      await new Promise(resolve => {
        this.$refs.text.addEventListener('transitionend', resolve);
        this.stateClass = '';
      });

      done();
    }
  },

  data: function () {
    return {
      stateClass: '',
    };
  },

  mounted: async function () {
    await this.$wait(100);
    this.stateClass = 'active';
  },

};