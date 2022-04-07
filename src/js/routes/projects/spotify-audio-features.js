import { projectRoute } from '../../mixins/project-route.js';

export default {

  mixins: [
    projectRoute,
  ],

  data () {
    return {
      heading1: 'Spotify Audio Features',
      heading2: 'Bekijk en zoek op eigenschap&shy;analyses van je favoriete muziek op Spotify',
      // heading2: 'Bekijk eigenschapanalyses van je favoriete muziek op Spotify en vind nieuwe muziek op basis van kwaliteiten',
      // clients: [
      //   '-',
      // ],
    };
  },

};