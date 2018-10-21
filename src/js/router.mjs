import Vue from './lib/vue.js';
import Router from './lib/vue-router.js';

import { who } from './routes/who.mjs';
import { projectsOverview } from './routes/projects-overview.mjs';
import { reachMe } from './routes/reach-me.mjs';

Vue.use(Router);

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: '/who' // NOTE: redirecten naar /who
		},
		{
			path: '/who',
			name: 'who',
			component: who,
		},
    {
			path: '/projects',
			name: 'project-overview',
      component: projectsOverview
		},
    {
			path: '/projects/:projectID',
			name: 'featured-project',
      component: projectsOverview,
      props: {
        showFeaturedProject: true
      }
		},
    {
			path: '/reach-me',
			name: 'reach-me',
			component: reachMe
		}
	]
});

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//     const currentUser = firebase.auth().currentUser

//     if (requiresAuth && !currentUser) {
//         next('/login')
//     } else if (requiresAuth && currentUser) {
//         next()
//     } else {
//         next()
//     }
// })