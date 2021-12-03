import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Kozijn&shy;ver&shy;bin&shy;dingen',
      heading2: 'Self-<wbr>service ad&shy;vi&shy;se&shy;ring tool voor hoek&shy;ankers van Gebr. Bode&shy;gra&shy;ven',
      clients: [
        'Gebr. Bode&shy;gra&shy;ven',
        'Fonkel',
        'Graphius',
      ],
    };
  },

};