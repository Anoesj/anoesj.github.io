import Vue from './lib/vue.js';

import { router } from './router.mjs';

import { navigation } from './components/navigation.mjs';
import { projectTeaser } from './components/project-teaser.mjs';

Vue.component('navigation', navigation);
Vue.component('project-teaser', projectTeaser);

new Vue({
  el: '#app',
  router: router,
  template:  `<div id="app">
                <navigation></navigation>
                <router-view></router-view>
              </div>`,
});

/* <navigation></navigation> */