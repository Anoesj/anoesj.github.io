import { Vue, Router } from './NodeModules.js';

import { config } from './config.js';

import { about } from './routes/about.js';
import { haringvliet } from './routes/projects/haringvliet.js';
import { kozijnverbindingen } from './routes/projects/kozijnverbindingen.js';
import { groenlinksMaak } from './routes/projects/groenlinks-maak.js';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: about,
      meta: {
        bodyClass: 'about',
      },
    },
    {
    	path: '/projects/haringvliet',
    	name: 'project--haringvliet',
      component: haringvliet,
    	meta: {
    		bodyClass: 'project',
    	},
    },
    {
    	path: '/projects/kozijnverbindingen',
    	name: 'project--kozijnverbindingen',
      component: kozijnverbindingen,
    	meta: {
    		bodyClass: 'project',
    	},
    },
    {
    	path: '/projects/groenlinks-maak',
    	name: 'project--groenlinks-maak',
      component: groenlinksMaak,
    	meta: {
    		bodyClass: 'project',
    	},
    },
    {
    	path: '/:catchAll(.*)',
    	redirect: '/',
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.body.dataset.page = to.meta.bodyClass;

  if (config.debug === true) {
    console.log(`%c→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  }

  next();
});