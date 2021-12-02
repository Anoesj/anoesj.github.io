import { projectRoute } from '../../mixins/project-route.js';

export const haringvliet = {

  mixins: [
    projectRoute,
  ],

  template:  `<div class="project">
                <span ref="backButton" class="back-button-wrapper"><back-button/></span>

                <div ref="headings">
                  <h1>Haringvliet – Interactive map</h1>
                  <h2>WWF, Sportvisserij Nederland, Staatsbosbeheer, Nationale Postcode Loterij, Natuurmonumenten, Vogelbescherming Nederland, ARK Natuurontwikkeling, Fonkel, Graphius</h2>
                </div>
              </div>`,

};