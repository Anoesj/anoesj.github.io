import { Project } from '../../components/project.js';
import { projectRoute } from '../../mixins/project-route.js';

export default {

  components: {
    Project,
  },

  mixins: [
    projectRoute,
  ],

  template:  `<Project
                ref="project"
                headerImg="/img/project-headers/spotify-audio-features-1.png"
              >
                <template #heading1>Spotify Audio Features</template>
                <template #heading2>Bekijk en zoek op eigenschap&shy;analyses van je favoriete muziek op Spotify</template>
                <template #content>
                  <h3>Concept</h3>
                  <p>Wat begon als een hobbyproject werd uiteindelijk een tool waar je eigenschappenanalyses van Spotify content kunt bekijken en nieuwe aanbevelingen kunt krijgen door middel van een zoekopdracht op audiokwaliteiten (knop rechts bovenin). Het is vooral een speelse interface bovenop openbare API’s van Spotify. Concept, UX en technische implementatie door mij. Design is ongeveer in de huisstijl van Spotify zelf gehouden.</p>

                  <h3>Bekijk in actie</h3>
                  <p><i class="fas fa-arrow-right-long"></i><a class="link" href="https://spotify.anoesjsadraee.com/">spotify.anoesjsadraee.com</a></p>
                </template>
              </Project>`,

};