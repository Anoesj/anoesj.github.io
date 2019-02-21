import { GSAP } from '../NodeModules.js';

export const who = {

  debugTag: 'who',
  debugColor: 'green',

  template:  `<transition
                appear
                @enter="animateIn"
                @leave="animateOut"
              >
                <section class="who">
                  <img src="/img/me.jpg" class="me" ref="me">
                  <div class="right" ref="text">
                    <h1>Hi, I'm Anoesj</h1>
                    <div class="whatever-i-am-wrapper">
                      <transition mode="out-in" name="slide">
                        <h3 :key="currentWhateverIAmIndex">{{ whateverIAms[currentWhateverIAmIndex] }}</h3>
                      </transition>
                    </div>
                  </div>
                </section>
              </transition>`,

  methods: {
    async animateIn (el, done) {
      this.$log('animateIn');
      const duration = this.$root.transitionDuration/2,
            tl = new GSAP.TimelineLite();

      tl.fromTo(this.$refs.me, duration,
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

      tl.fromTo(this.$refs.text, duration * 0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        duration * 0.8
      );

      tl.fromTo(this.$refs.text, duration * 1.5,
        {
          x: -50,
          rotation: this.$root.angle,
        },
        {
          x: 0,
          rotation: this.$root.angle,
          ease: GSAP.Power4.easeInOut,
        },
        duration * 0.2
      );

      await new Promise((resolve) => {
        tl.eventCallback('onComplete', resolve);
        tl.play();
      });

      this.$emit('showNavigation', true);

      this.$log('done with animateIn');
      done();
      this.startInterval();
    },

    async animateOut (el, done) {
      this.$log('animateOut');

      await new Promise((resolve) => {
        const duration = this.$root.transitionDuration/2;
        // const timeline = GSAP.TimelineMax({});
        // TODO: omzetten naar GSAP.TimelineLite ofzo
        GSAP.TweenMax.to(this.$refs.text, duration,
          {
            x: -50,
            rotation: this.$root.angle,
            ease: GSAP.Power4.easeInOut,
          },
        );

        GSAP.TweenMax.to(this.$refs.text, duration * 0.75,
          {
            opacity: 0,
            ease: GSAP.Power2.easeInOut,
          },
        );

        GSAP.TweenMax.to(this.$refs.me, duration,
          {
            scale: 0,
            opacity: 0,
            ease: GSAP.Power4.easeInOut,
            onComplete: resolve,
            rotation: -520,
          },
        ).delay(duration * 0.3);
      });

      this.$log('done with animateOut');
      done();
    },

    startInterval () {
      this.switchActiveWhateverIAm();
      this.setIntervalInstance = setInterval(this.switchActiveWhateverIAm, this.interval);
    },

    switchActiveWhateverIAm () {
      this.currentWhateverIAmIndex = (this.currentWhateverIAmIndex === this.whateverIAmsAmount - 1) ? 0 : this.currentWhateverIAmIndex + 1;
    },
  },

  data () {
    const whateverIAms = [
      'test',
      'je moeder',
      'je vader',
      'je dikke oma',
    ];

    return {
      currentWhateverIAmIndex: -1,
      interval: 2000,
      setIntervalInstance: null,
      whateverIAms: whateverIAms,
      whateverIAmsAmount: whateverIAms.length,
    };
  },

  // mounted () {
    
  // },

  beforeDestroy () {
    clearInterval(this.setInterval);
  },

};