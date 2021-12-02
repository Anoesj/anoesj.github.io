import { projectRoute } from '../../mixins/project-route.js';

export const haringvliet = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>
                <h1 ref="h1">Haringvliet</h1>
              </div>`,

};