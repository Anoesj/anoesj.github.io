import { createRouter, createWebHistory } from 'vue-router';

// @ts-ignore TypeScript being TypeScript
import { config } from './config.ts';

import Home from './routes/Home.vue';
import ProjectsOverview from './routes/ProjectsOverview.vue';

export const Router = createRouter({

  history: createWebHistory(),

  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        bodyClass: 'about',
      },
    },
    {
      path: '/projects',
      name: 'project-overview',
      component: ProjectsOverview,
      meta: {
        bodyClass: 'projects',
      },
    },
    {
      path: '/projects/:projectID',
      name: 'featured-project',
      component: ProjectsOverview,
      props: {
        showFeaturedProject: true
      },
      meta: {
        bodyClass: 'projects project-open',
      },
    },
  ],

});

Router.beforeEach((to, from, next) => {
  document.body.dataset.page = to.meta.bodyClass as string;

  if (config.debug === true) {
    console.log(`%c→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  }

  next();
});