import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
import Router from 'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.esm.js';
import * as GSAP from 'https://cdn.jsdelivr.net/npm/gsap@2.1.0/index.js';
// import Vue from '/node_modules/vue/dist/vue.esm.browser.js';
// import Router from '/node_modules/vue-router/dist/vue-router.esm.js';
// import * as GSAP from '/node_modules/gsap/index.js';

/** --------------------------------------------------------------
  * Gebruik dit bestand om modules te importeren die eigenlijk in
  * de /node_modules map staan, maar benaderbaar zijn doordat we een
  * trucje met browserSync doen.
  *
  * Al deze modules moeten bij het compileren van de applicatie
  * gekopieerd worden naar /dist/lib en bij de verwijzingen naar deze
  * bestanden moeten de paden worden aangepast van /node_modules/[...]
  * naar /dist/lib/[...].
  *
  * Voeg daarom in ./gulp-tasks/processes/copyToDist.js het bestand toe
  * aan 'requiredNodeModulesFiles', dit zorgt ervoor dat in index.html
  * en NodeModules.js de referenties naar dat bestand vervangen worden.
  ------------------------------------------------------------- **/

export { Vue, Router, GSAP };