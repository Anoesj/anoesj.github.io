import { projectRoute } from '../../mixins/project-route.js';

export const kozijnverbindingen = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>
                <h1 ref="h1">GB Kozijnverbindingen</h1>
              </div>`,

};