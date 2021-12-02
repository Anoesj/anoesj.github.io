import { projectRoute } from '../../mixins/project-route.js';

export const groenlinksMaak = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <!-- <img src="maak plaatje voor achtergrond"> -->
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>

                <div ref="headings">
                  <h1>Maak – Social media content generator</h1>
                  <h2>GroenLinks</h2>
                </div>
              </div>`,

};