import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Maak',
      heading2: 'Web app voor het maken van so&shy;cial me&shy;dia con&shy;tent binnen de huis&shy;stijl van GroenLinks',
      clients: [
        'GroenLinks',
      ],
    };
  },

};