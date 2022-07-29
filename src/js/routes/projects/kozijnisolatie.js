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
                <template #heading1>Kozijn&shy;iso&shy;latie re&shy;ken&shy;tool</template>
                <template #heading2>Tool voor het be&shy;re&shy;ke&shy;nen van de isolatie&shy;waarden van ko&shy;zij&shy;nen</template>
                <template #content>
                  <h3>Concept</h3>
                  <p>Interactieve rekentool voor het berekenen van de isolatiewaarden van kozijnen en alle onderdelen. Alle interactieve tekeningen in de tool zijn in feite een grote dynamische SVG, waar onder de motorkap onderdelen in de SVG gekoppeld worden aan rekenlogica voor de isolatiewaardeberekening. In opdracht van de Nederlandse Branchevereniging voor de Timmerindustrie. Design door Graphius, technische implementatie en UX door mij, met wat hulp van twee collega’s bij Fonkel.</p>
                </template>
              </Project>`,

  data () {
    return {
      clients: [
        'Neder&shy;landse Branche&shy;ver&shy;eni&shy;ging voor de Timmer&shy;indus&shy;trie',
        'Fonkel – digitale tooling voor bouw en techniek',
        'Graphius – grafisch ontwerpbureau',
      ],
    };
  },

};