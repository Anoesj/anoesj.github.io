import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore TypeScript being TypeScript
import { CustomVueExtensions } from './plugins/CustomVueExtensions.ts';
// @ts-ignore TypeScript being TypeScript
import { Router } from './router.ts';
// @ts-ignore TypeScript being TypeScript
import { config } from './config.ts';

const app = createApp(App);
app.use(CustomVueExtensions);
app.use(Router);
app.provide('config', config);
app.mount('#app');
