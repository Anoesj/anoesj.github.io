import { Vue, Router } from './NodeModules.js';

import { who } from './routes/who.js';
import { projectsOverview } from './routes/projects-overview.js';
import { reachMe } from './routes/reach-me.js';

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
				bodyClass: 'projects project-open'
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
