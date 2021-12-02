import { projectRoute } from '../../mixins/project-route.js';

export const groenlinksMaak = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <!-- <img src="maak plaatje voor achtergrond"> -->
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>
                <h1 ref="h1">GroenLinks Maak</h1>
              </div>`,

};