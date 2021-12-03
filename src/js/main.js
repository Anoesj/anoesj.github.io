import { Vue } from './NodeModules.js';
import { router } from './router.js';
import { config } from './config.js';
import { CustomVueExtensions } from './plugins/CustomVueExtensions.js';

import { backButton } from './components/back-button.js';
import { socialLinks } from './components/social-links.js';

(() => {
  Vue.use(CustomVueExtensions);
  Vue.component('back-button', backButton);
  Vue.component('social-links', socialLinks);

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

                  <social-links/>
                </div>`,

    data () {
      return {
        config,
        transitionDuration: this.$convertCSSDurationToSeconds(this.$getCSSVariable('--speed-slow')),
        angle: parseFloat(this.$getCSSVariable('--angle')),
      };
    },

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