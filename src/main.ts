import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore TypeScript being TypeScript
import { CustomVueExtensions } from './plugins/CustomVueExtensions.ts';
// @ts-ignore TypeScript being TypeScript
import { Router } from './router.ts';
// @ts-ignore TypeScript being TypeScript
import { config } from './config.ts';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('smooth', 'M0,0 C0,0 0.185,0.063 0.244,0.118 0.43,0.292 0.419,0.6 0.542,0.784 0.696,1.014 1,1 1,1');

const app = createApp(App);

app.use(CustomVueExtensions);
app.use(Router);

app.provide('config', config);

app.provide('wait', (ms: number) => {
  return new Promise(async resolve => {
    setTimeout(resolve, ms);
  });
});

app.provide('cloneObject', (object: any) => {
  if (object === undefined) return undefined;
  else if (object === null) return null;
  return JSON.parse(JSON.stringify(Object.assign({}, object)));
});

const getCSSVariable = (varName: string) => {
  return window.getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

const convertCSSDurationToSeconds = (duration: string) => {
  return parseFloat(duration) / ((duration.includes('ms') ? 1000 : 1));
};

app.provide('getCSSVariable', getCSSVariable);
app.provide('convertCSSDurationToSeconds', convertCSSDurationToSeconds);

app.provide('transitionDuration', convertCSSDurationToSeconds(getCSSVariable('--speed-slow')) as number);
app.provide('angle', parseFloat(getCSSVariable('--angle')));

app.mount('#app');
