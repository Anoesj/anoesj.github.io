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
                <template #heading1>Kozijn&shy;ver&shy;bin&shy;dingen</template>
                <template #heading2>Self-<wbr>service ad&shy;vi&shy;se&shy;ring tool voor de hoek&shy;ankers van Gebr. Bode&shy;gra&shy;ven</template>
                <template #content>
                  <h3>Concept</h3>
                  <p>Om hun marktpositie te verstevigen en klanten een self-service tool aan te bieden, wilde GB een web app, waarin men voor veelvoorkomende situaties kan berekenen welke materialen nodig zijn om een kozijn, schuifpui of houtskeletbouw-element veilig te bevestigen. Inmiddels loopt de samenwerking al meerdere jaren en wordt er nog altijd doorontwikkeld. Niet alleen producten van GB worden meegenomen in het advies, maar ook producten van bevestigingsmiddelenleveranciers, zoals fischer, Hilti, Spit en Würth. Hierdoor biedt de tool een enorme meerwaarde voor veel bedrijven in de bouw. Doordat er ook een PDF kan worden uitgedraaid met onderbouwing van het advies en voorbeelden voor de toepassing van de producten, is GB goed voorbereid op de Wkb (Wet Kwaliteitsborging).</p>

                  <h3>Techniek</h3>
                  <p>Headless Vue.js front-end, Drupal back-end met REST API en een Node.js microservice met PM2 en MongoDB voor calculaties. Dynamische, interactieve SVG’s. PDF export met PDFKit. Custom deployment pipelines. Meerdere varianten van de front-end naast elkaar voor enkele van de aangesloten partijen, op maat gemaakt en in eigen huisstijl.</p>

                  <h3>Rol</h3>
                  <p>Lead developer, full-stack. Zelfstandig communiceren met de klant, andere aangesloten partijen en designer, meedenken over de beste aanpak voor de integratie van nieuwe productlijnen. Inschatten en -plannen van sprints. Ongeveer 60% van de back-end gebouwd, 80% van de front-end en 100% van de natuurkundige berekeningen (in samenwerking met de klant).</p>
                </template>
              </Project>`,

  data () {
    return {
      clients: [
        'Gebr. Bode&shy;gra&shy;ven – marktleider in verbindingen voor de bouw',
        'Fonkel – digitale tooling voor bouw en techniek',
        'Graphius – grafisch ontwerpbureau',
      ],
    };
  },

};