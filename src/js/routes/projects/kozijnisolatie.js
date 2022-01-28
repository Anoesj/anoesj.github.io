import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Kozijn&shy;iso&shy;latie re&shy;ken&shy;tool',
      heading2: 'Tool voor het be&shy;re&shy;ke&shy;nen van de isolatie&shy;waarden van ko&shy;zij&shy;nen',
      clients: [
        'Neder&shy;landse Branche&shy;ver&shy;eni&shy;ging voor de Timmer&shy;indus&shy;trie',
        'Fonkel',
        'Graphius',
      ],
    };
  },

};