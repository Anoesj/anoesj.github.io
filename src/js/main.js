import { Vue } from './NodeModules.js';

import { config } from './config.js';
import { router } from './router.js';

import { navigation } from './components/navigation.js';
import { projectTeaser } from './components/project-teaser.js';
import { CustomVueExtensions } from './plugins/CustomVueExtensions.js';

(() => {
  // console.log('%c Anoesj Sadraee portfolio', 'background: linear-gradient(to right, #da4453, #89216b); padding:5px; font-size: 10px; color: #ffffff'),
  // console.log(`%c→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  // console.log('%c Anoesj Sadraee portfolio', 'background: linear-gradient(to right, #da4453, #89216b); padding:5px; font-size: 10px; color: #ffffff'),

  Vue.use(CustomVueExtensions);

  Vue.component('navigation', navigation);
  Vue.component('project-teaser', projectTeaser);

  new Vue({

    debugTag: 'main',
    debugColor: 'darkorange',

    el: '#app',
    router: router,
    template:  `<div id="app">
                  <navigation :visible="navigationVisible"></navigation>

                  <transition
                    appear
                    @enter="animateIn"
                    @leave="animateOut"
                    :mode="transitionMode"
                  >
                    <router-view ref="route" @showNavigation="showNavigation"></router-view>
                  </transition>
                </div>`,
    data () {
      return {
        config: config,
        transitionDuration: this.$convertCSSDurationToSeconds(this.$getCSSVariable('--speed-slow')),
        angle: parseFloat(this.$getCSSVariable('--angle')),
        navigationVisible: false,
        transitionMode: 'out-in',
      };
    },

    methods: {
      showNavigation () {
        this.navigationVisible = true;
      },

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