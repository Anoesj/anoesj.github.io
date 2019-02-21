import { Vue } from './NodeModules.js';

import { router } from './router.js';

import { navigation } from './components/navigation.js';
import { projectTeaser } from './components/project-teaser.js';
import { CustomVueExtensions } from './plugins/CustomVueExtensions.js';

(() => {
  Vue.use(CustomVueExtensions);

  Vue.component('navigation', navigation);
  Vue.component('project-teaser', projectTeaser);

  new Vue({

    el: '#app',
    router: router,
    template:  `<div id="app">
                  <navigation :visible="navigationVisible"></navigation>
                  <router-view ref="route" @showNavigation="showNavigation"></router-view>
                </div>`,
    data () {
      return {
        config: {
          debug: true, // TODO: temp
        },
        transitionDuration: this.$convertCSSDurationToSeconds(this.$getCSSVariable('--transition-duration')),
        angle: parseFloat(this.$getCSSVariable('--angle')),
        navigationVisible: false,
      };
    },

    methods: {
      showNavigation () {
        this.navigationVisible = true;
      },
    },

  });
})();