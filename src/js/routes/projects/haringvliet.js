import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Haring&shy;vliet',
      heading2: 'Ontdek het natuurgebied met de interactieve kaart',
      clients: [
        'We&shy;re&shy;ld Na&shy;tuur Fonds',
        'Sport&shy;visserij Neder&shy;land',
        'Staats&shy;bos&shy;beheer',
        'Nationale Postcode Loterij',
        'Natuur&shy;monu&shy;men&shy;ten',
        'Vogel&shy;bescher&shy;ming Neder&shy;land',
        'ARK Natuur&shy;ont&shy;wik&shy;ke&shy;ling',
        'Fonkel',
        'Graphius',
      ],
    };
  },

};