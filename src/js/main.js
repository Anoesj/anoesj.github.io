import { Vue } from './NodeModules.js';

import { router } from './router.js';

import { navigation } from './components/navigation.js';
import { projectTeaser } from './components/project-teaser.js';
import { CustomVueExtensions } from './plugins/CustomVueExtensions.js';

Vue.use(CustomVueExtensions);

Vue.component('navigation', navigation);
Vue.component('project-teaser', projectTeaser);

let currentlyNavigating = false;

// router.beforeEach(async (to, from, next) => {
//   if (currentlyNavigating === true) {
//     return;
//   }

//   else {
//     currentlyNavigating = true;

//     document.body.dataset.page = to.meta.bodyClass;

//     if (from.name) {
//       const fromComponent = app.$refs.route;
//       if ('animateOut' in fromComponent) {
//         await fromComponent.animateOut();
//       }

//       next();

//       // const toComponent = app.$refs.route;
//       // if ('animateIn' in toComponent) {
//       //   await toComponent.animateIn();
//       // }
//     }

//     else {
//       next();
//     }

//     currentlyNavigating = false;
//   }
// });

const app = new Vue({

  el: '#app',
  router: router,
  template:  `<div id="app">
                <navigation></navigation>
                <router-view ref="route"></router-view>
              </div>`,
  data () {
    return {
      config: {
        debug: true, // TODO: temp
      },
      transitionDuration: this.$convertCSSDurationToSeconds(this.$getCSSVariable('--transition-duration')),
      angle: parseFloat(this.$getCSSVariable('--angle')),
    };
  },

});