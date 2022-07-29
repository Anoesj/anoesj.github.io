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
                headerImg="/img/project-headers/haringvliet-1.png"
                :clients="clients"
              >
                <template #heading1>Haring&shy;vliet</template>
                <template #heading2>Ontdek het natuurgebied met de interactieve kaart</template>
                <template #content>
                  <h3>Concept</h3>
                  <p>Een kleurrijke, interactieve kaart om het Haringvliet natuurgebied te ontdekken. Gebruikers kunnen drie routes volgen door het gebied of zelf door de kaart navigeren. De kaart is volledig responsive, op mobiel werkt deze ook prettig voor de eindgebruiker. Het concept is ontwikkeld in samenwerking met Graphius, het design door Graphius en ik verzorgde de technische implementatie.</p>

                  <h3>Bekijk in actie</h3>
                  <p>Deze website is helaas offline sinds 2022, een live demonstratie is echter wel mogelijk tijdens een kennismakingsgesprek.</p>
                </template>
              </Project>`,

  data () {
    return {
      clients: [
        'We&shy;re&shy;ld Na&shy;tuur Fonds',
        'Sport&shy;visserij Neder&shy;land',
        'Staats&shy;bos&shy;beheer',
        'Nationale Postcode Loterij',
        'Natuur&shy;monu&shy;men&shy;ten',
        'Vogel&shy;bescher&shy;ming Neder&shy;land',
        'ARK Natuur&shy;ont&shy;wik&shy;ke&shy;ling',
        'Fonkel – digitale tooling voor bouw en techniek',
        'Graphius – grafisch ontwerpbureau',
      ],
    };
  },

};