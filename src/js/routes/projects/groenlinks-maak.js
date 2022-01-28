import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Maak',
      heading2: 'Web app voor het maken van social media content binnen de huis&shy;stijl van GroenLinks',
      clients: [
        'GroenLinks',
      ],
    };
  },

};