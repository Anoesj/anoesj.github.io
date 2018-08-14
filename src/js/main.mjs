import { projects } from './projects.mjs';
import Vue from './lib/vue.js';

console.log(projects);

new Vue({
  el: '#projects_wrapper',
  template: '<h2> hoi </h2>'
});