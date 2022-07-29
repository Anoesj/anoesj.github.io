import { Vue } from './NodeModules.js';
import { router } from './router.js';
import { config } from './config.js';
import { CustomVueExtensions } from './plugins/CustomVueExtensions.js';

import { BackButton } from './components/back-button.js';
import { SocialLinks } from './components/social-links.js';
import { ContactBlock } from './components/contact-block.js';

(() => {
  Vue.use(CustomVueExtensions);
  Vue.component('BackButton', BackButton);
  Vue.component('SocialLinks', SocialLinks);
  Vue.component('ContactBlock', ContactBlock);

  new Vue({

    debugTag: 'main',
    debugColor: 'darkorange',

    el: '#app',
    router,

    template:  `<div id="app">
                  <transition
                    appear
                    @enter="animateIn"
                    @leave="animateOut"
                    mode="out-in"
                    enter-active-class="animating"
                    leave-active-class="animating"
                  >
                    <router-view ref="route"/>
                  </transition>

                  <SocialLinks/>
                </div>`,

    data () {
      return {
        config,
        transitionDuration: this.$convertCSSDurationToSeconds(this.$getCSSVariable('--speed-slow')),
        angle: parseFloat(this.$getCSSVariable('--angle')),
      };
    },

    // mounted () {
    //   document.addEventListener('mousemove', (event) => {
    //     if (event.target?.closest('.link')) {
    //       document.body.classList.add('dim-text');
    //     }
    //     else {
    //       document.body.classList.remove('dim-text');
    //     }
    //   });
    // },

    methods: {
      async animateIn (el, done) {
        const inAnimatingComponent = this.$refs.route;
        inAnimatingComponent.$log('animateIn');

        const cb = () => {
          inAnimatingComponent.$log('done with animateIn');
          done();
        };

        if ('animateIn' in inAnimatingComponent) {
          await inAnimatingComponent.animateIn(el, cb, !this.navigationVisible);
        }

        else {
          cb();
        }
      },

      async animateOut (el, done) {
        const outAnimatingComponent = this.$refs.route;
        outAnimatingComponent.$log('animateOut');

        const cb = () => {
          document.documentElement.scrollTop = 0;
          outAnimatingComponent.$log('done with animateOut');
          done();
        };

        if ('animateOut' in outAnimatingComponent) {
          await outAnimatingComponent.animateOut(el, cb);
        }

        else {
          cb();
        }
      },
    },

  });
})();