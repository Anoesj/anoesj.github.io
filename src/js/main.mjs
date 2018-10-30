import Vue from './lib/vue.mjs';

import { router } from './router.mjs';

import { navigation } from './components/navigation.mjs';
import { projectTeaser } from './components/project-teaser.mjs';

Vue.component('navigation', navigation);
Vue.component('project-teaser', projectTeaser);

let currentlyNavigating = false;

router.beforeEach(async (to, from, next) => {
  if (currentlyNavigating === true) return;
  currentlyNavigating = true;

	document.body.dataset.page = to.meta.bodyClass;

  if (from.name) {
    const fromComponent = app.$refs.route;
    if ('animateOut' in fromComponent) {
      await fromComponent.animateOut();
    }

    next();

    // const toComponent = app.$refs.route;
    // if ('animateIn' in toComponent) {
    //   await toComponent.animateIn();
    // }
  }

  else {
    next();
  }

  currentlyNavigating = false;
});

Vue.prototype.$wait = ms => {
  return new Promise(async resolve => {
    await setTimeout(resolve, ms);
  });
}

const app = new Vue({
  el: '#app',
  router: router,
  template:  `<div id="app">
                <navigation></navigation>
                <router-view ref="route"></router-view>
              </div>`,
});