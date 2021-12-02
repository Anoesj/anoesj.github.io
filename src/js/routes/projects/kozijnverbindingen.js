import { projectRoute } from '../../mixins/project-route.js';

export const kozijnverbindingen = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>

                <div ref="headings">
                  <h1>Kozijnverbindingen calculator</h1>
                  <h2>Gebr. Bodegraven, Fonkel, Graphius</h2>
                </div>
              </div>`,

};