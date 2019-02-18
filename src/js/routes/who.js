import { GSAP } from '../NodeModules.js';

export const who = {
  template:  `<transition
                @enter="animateIn"
                @leave="animateOut"
              >
                <section class="who" :class="stateClass">
                  <img src="/img/me.jpg" style="max-width:680px;">
                  <div class="right" ref="text">
                    <h1>Hi, I'm Anoesj</h1>
                  </div>
                </section>
              </transition>`,

  methods: {
    animateIn: async function (el, done) {
      // TODO: Alles met GSAP doen, wordt veel cooler man!
      console.log(GSAP.TweenMax);

      console.log('animateIn');
      await new Promise(resolve => {
        this.$refs.text.addEventListener('transitionend', resolve);
        this.stateClass = 'active';
      });

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

  mounted: async function () {
    await this.$wait(100);
    this.stateClass = 'active';
  },

  data: function () {
    return {
      stateClass: ''
    };
  }
};