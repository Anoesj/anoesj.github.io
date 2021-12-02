import { GSAP } from '../NodeModules.js';

export const home = {

  debugTag: 'home',
  debugColor: 'green',

  template:  `<section class="home">
                <div
                  v-once
                  ref="text"
                  class="text"
                >
                  <h1>Hi, I’m Anoesj,</h1>
                  <p>A web developer mainly focused on creating slick, usable web apps. I am experienced with JavaScript, CSS, Vue.js, writing APIs and more. More importantly however, I’ve learned to <strong>really</strong> understand the clients I work with. Finding out what problems they are facing, gathering domain knowledge and working towards a sustainable digital solution.</p>

                  <h3>Background</h3>
                  <p>I learned so much at <a href="https://fonkel.io" class="link">Fonkel</a>, a digital agency where I worked on Drupal, Vue.js and Laravel projects on and off in the past decade. In the meantime, I finished my Bachelor of Music in 2020 at ArtEZ Institute of the Arts in Enschede, The Netherlands. During my (audio related) internship at <a href="https://media.monks.com/" class="link">Media.Monks</a>, I realized my interest lies mainly in programming. Since then, I’ve started freelancing alongside working at Fonkel.</p>

                  <template v-if="false">
                    <h3>Clients</h3>
                    <ul>
                      <li v-for="client of clients">{{ client.name }}</li>
                    </ul>
                  </template>
                </div>

                <div
                  v-once
                  class="featured-projects"
                >
                  <div
                    v-for="(project, index) of featuredProjects"
                    :key="project.routeName"
                    :ref="'project' + (index + 1)"
                    :data-project-id="project.routeName"
                    class="project--teaser"
                  >
                    <router-link :to="{ name: 'project--' + project.routeName }">
                      <img :src="'/img/projects/' + project.routeName + '-1.png'"/>
                      <p><strong>{{ project.title }}</strong></p>
                    </router-link>
                  </div>
                </div>
              </section>`,

  data () {
    return {
      // IDEA: Turn these static images into videos?
      featuredProjects: [
        {
          routeName: 'kozijnverbindingen',
          // image: '/img/projects/kozijnverbindingen-1.png',
          title: 'Kozijnverbindingen',
        },
        {
          routeName: 'haringvliet',
          // image: '/img/projects/haringvliet-1.png',
          title: 'Haringvliet',
        },
        {
          routeName: 'groenlinks-maak',
          // image: '/img/projects/groenlinks-maak-1.png',
          title: 'GroenLinks Maak',
        },
      ],
      /*
        Development:
        - Fonkel
        - Gebr. Bodegraven
        - Hilti
        - fischer
        - Spit
        - Haringvliet
        - GroenLinks
        - Nederlandse Branchevereniging voor de Timmerindustrie
        - Accoya (Accsys Technologies?)
        - ByDANA?
        - Easylink?
        - SRA?
        - OPUS pods?

        Music:
        - Media.Monks
        - Google
        - Spotify
        - Knorr
        - HP
        - Pharmaton
        - Blue Nile
        - Kensington
        - Universal Music Group
        - OPI
        - Oracle
        - Sanofi
        - A Mili
        - Lilith Effie
        - Colin Waters
      */
      clients: [
        {
          name: 'Gebr. Bodegraven',
          logo: '/img/clients/gebr-bodegraven.png',
        },
        {
          name: 'Hilti',
          logo: '/img/clients/hilti.png',
        },
        // {
        //   name: 'fischer',
        //   logo: '/img/clients/fischer.png',
        // },
        {
          name: 'Spit',
          logo: '/img/clients/spit.png',
        },
        {
          name: 'Haringvliet',
          logo: '/img/clients/haringvliet.png',
        },
        {
          name: 'GroenLinks',
          logo: '/img/clients/groenlinks.png',
        },
        {
          name: 'Nederlandse Branchevereniging voor de Timmerindustrie',
          logo: '/img/clients/nbvt.png',
        },
        {
          name: 'Accsys Technologies',
          logo: '/img/clients/accoya.png',
        },
      ],
    };
  },

  methods: {
    async animateIn (el, done, initial = false) {
      await this.animation(this.$root.transitionDuration / 2);

      done();
    },

    async animateOut (el, done) {
      await this.animation(this.$root.transitionDuration / 4, true);
      done();
    },

    async animation (duration, reverse = false) {
      const tl = new GSAP.TimelineLite();

      const transformDuration = duration * 1.3,
            opacityDuration = duration * 1.2,
            projectDuration = duration * 1,
            textTransformStart = duration * 0,
            textOpacityStart = duration * 0.3,
            projectStart = duration * 0.6;

      tl.fromTo(this.$refs.text, transformDuration,
        {
          x: -60,
          scale: 0.97,
          rotation: this.$root.angle,
          skewX: 3,
        },
        {
          x: 0,
          scale: 1,
          rotation: this.$root.angle,
          skewX: 0,
          transformOrigin: 'center center',
          ease: GSAP.Power3.easeInOut,
        },
        textTransformStart,
      );

      tl.fromTo(this.$refs.text, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        textOpacityStart,
      );

      for (const index of this.featuredProjects.keys()) {
        tl.fromTo(this.$refs[`project${index + 1}`], projectDuration,
          {
            y: -60,
            scale: 0.92,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: GSAP.Power2.easeInOut,
          },
          projectStart + (index + 1) * (duration * 0.2),
        );
      }

      await new Promise((resolve) => {
        if (reverse === true) {
          tl.eventCallback('onReverseComplete', resolve);
          tl.reverse(0, false);
        }
        else {
          tl.eventCallback('onComplete', resolve);
          tl.play();
        }
      });
    },
  },

};