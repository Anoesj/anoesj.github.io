import { Project } from '../../components/project.js';
import { projectRoute } from '../../mixins/project-route.js';

export default {

  components: {
    Project,
  },

  mixins: [
    projectRoute,
  ],

  template:  `<Project ref="project" :clients="clients">
                <template #heading1>Maak</template>
                <template #heading2>Web app voor het maken van social media content in de huis&shy;stijl van GroenLinks</template>
                <template #content>
                  <h3>Concept</h3>
                  <p>Voor de online presence van GroenLinks maken en verspreiden DMM’ers (digital media managers) visuele content, waardoor de GroenLinks standpunten zichtbaarheid krijgen. Om de kwaliteit van deze content te waarborgen was een web app nodig, waarmee DMM’ers in de huisstijl van GroenLinks content kunnen maken. Om dit mogelijk te maken bouwden we Maak. Men kan sjablonen kiezen, vrij tekstblokken plaatsen, achtergrondafbeeldingen of -kleuren instellen en een logobalk of kader toevoegen aan de afbeelding. Er kan gewerkt worden met standaardformaten, zoals Instagram Stories, of eigen formaten ingesteld worden.</p>

                  <h3>Techniek</h3>
                  <p>Standalone front-end applicatie met Vue.js (v3 met Composition API), Vite, TypeScript, Sass en Pinia (state management) in de basis. Voor de editor is gebruikgemaakt van Fabric.js, een interactieve canvas library.</p>

                  <h3>Rol</h3>
                  <p>Begonnen als vrijwilliger en in samenwerking met GroenLinks, een andere developer en een UX’er de basis uitgedacht en opgezet. Later als enige developer op freelance basis verder gewerkt aan nieuwe iteraties.</p>
                </template>
              </Project>`,

  data () {
    return {
      clients: [
        'GroenLinks',
      ],
    };
  },

};