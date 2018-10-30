import Vue from './lib/vue.mjs';
import Router from './lib/vue-router.mjs';

import { who } from './routes/who.mjs';
import { projectsOverview } from './routes/projects-overview.mjs';
import { reachMe } from './routes/reach-me.mjs';

Vue.use(Router);

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: '/who'
		},
		{
			path: '/who',
			name: 'who',
			component: who,
			meta: {
				bodyClass: 'about'
			}
		},
    {
			path: '/projects',
			name: 'project-overview',
      component: projectsOverview,
			meta: {
				bodyClass: 'projects'
			}
		},
    {
			path: '/projects/:projectID',
			name: 'featured-project',
      component: projectsOverview,
      props: {
        showFeaturedProject: true
      },
			meta: {
				bodyClass: 'projects'
			}
		},
    {
			path: '/reach-me',
			name: 'reach-me',
			component: reachMe,
			meta: {
				bodyClass: 'contact'
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	document.body.dataset.page = to.meta.bodyClass;
	next();
});