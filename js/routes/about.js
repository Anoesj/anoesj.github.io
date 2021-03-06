import { GSAP } from '../NodeModules.js';

export const about = {

  debugTag: 'who',
  debugColor: 'green',

  template:  `<section class="who">
                <img src="/img/me.jpg" class="me" ref="me">
                <div class="right" ref="text">
                  <h1>Hey, I'm Anoesj</h1>
                  <p>Web developer, electronic musician, digital explorer... Whatever you want to call it, it's usually something with sound, programming, or both.</p>
                  <p>I'm currently working on a new website. You can reach me on any of these platforms:</p>
                  <p class="social-links">
                    <a href="https://www.linkedin.com/in/anoesj/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://facebook.com/anoesj"><i class="fab fa-facebook"></i></a>
                    <a href="https://instagram.com/anoesj"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/anoesj"><i class="fab fa-github"></i></a>
                    <a href="https://soundcloud.com/shiruwan"><i class="fab fa-soundcloud"></i></a>
                  </p>
                  <!-- <div class="whatever-i-am-wrapper">
                    <transition mode="out-in" name="slide">
                      <h3 :key="currentWhateverIAmIndex">{{ whateverIAms[currentWhateverIAmIndex] }}</h3>
                    </transition>
                  </div> -->
                </div>
              </section>`,

  methods: {
    async animateIn (el, done, initial = false) {
      await this.animation(this.$root.transitionDuration/2);

      if (initial === true) this.$emit('showNavigation', true);

      done();
      // this.startInterval();
    },

    async animateOut (el, done) {
      // clearInterval(this.setInterval);
      await this.animation(this.$root.transitionDuration/3, true);
      done();
    },

    async animation (duration, reverse = false) {
      const tl = new GSAP.TimelineLite();

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
      'I compose music for bands, artists',
      'je moeder',
      'je vader',
      'je dikke oma',
    ];

    return {
      currentWhateverIAmIndex: -1,
      interval: 2500,
      setIntervalInstance: null,
      whateverIAms: whateverIAms,
      whateverIAmsAmount: whateverIAms.length,
    };
  },

};