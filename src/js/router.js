import { Vue, Router } from './NodeModules.js';

import { config } from './config.js';

import { home } from './routes/home.js';

import haringvliet from './routes/projects/haringvliet.js';
import kozijnverbindingen from './routes/projects/kozijnverbindingen.js';
import groenlinksMaak from './routes/projects/groenlinks-maak.js';
import kozijnisolatie from './routes/projects/kozijnisolatie.js';
import spotifyAudioFeatures from './routes/projects/spotify-audio-features.js';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        pageID: 'home',
      },
    },
    {
    	path: '/projects/haringvliet',
    	name: 'project--haringvliet',
      component: haringvliet,
    	meta: {
    		pageID: 'project',
    	},
    },
    {
    	path: '/projects/kozijnverbindingen',
    	name: 'project--kozijnverbindingen',
      component: kozijnverbindingen,
    	meta: {
    		pageID: 'project',
    	},
    },
    {
    	path: '/projects/groenlinks-maak',
    	name: 'project--groenlinks-maak',
      component: groenlinksMaak,
    	meta: {
    		pageID: 'project',
    	},
    },
    {
    	path: '/projects/kozijnisolatie',
    	name: 'project--kozijnisolatie',
      component: kozijnisolatie,
    	meta: {
    		pageID: 'project',
    	},
    },
    {
    	path: '/projects/spotify-audio-features',
    	name: 'project--spotify-audio-features',
      component: spotifyAudioFeatures,
    	meta: {
    		pageID: 'project',
    	},
    },
    {
    	path: '/:catchAll(.*)',
    	redirect: '/',
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.body.dataset.page = to.meta.pageID;

  if (config.debug === true) {
    console.log(`%c→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  }

  next();
});