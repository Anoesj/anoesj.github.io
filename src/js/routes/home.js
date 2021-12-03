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
                  <p>A web developer mainly focused on creating slick, usable web apps. I am experienced with JavaScript, CSS, Vue.js, writing APIs and more. More important however, is that I always try to <strong>really</strong> understand the clients I work for. Finding out what problems they are facing, gathering domain knowledge and working towards a sustainable digital solution together.</p>

                  <h2>Background</h2>
                  <p>I’m located in Amersfoort, The Netherlands. Here, I work for <a href="https://fonkel.io" class="link">Fonkel</a>, a digital agency, where I’ve been working on Drupal, Vue.js and Laravel projects on and off in the past decade. In the middle of the pandemic, I finished my Bachelor of Music at ArtEZ Institute of the Arts in Enschede, The Netherlands. During my (audio related) internship at <a href="https://media.monks.com/" class="link">Media.Monks</a>, I realized my interest lies mainly in programming. Since then, I’ve started freelancing alongside working at Fonkel and taking on interesting projects.</p>

                  <template v-if="false">
                    <h2>Clients</h2>
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
                      <span class="project__media-wrapper">
                        <img :src="project.image"/> <!-- v-if="project.image"  -->
                        <video v-if="project.video" :src="project.video" autoplay playsinline muted loop></video> <!-- v-else-if="project.video" -->
                      </span>
                      <p><strong>{{ project.title }}</strong></p>
                    </router-link>
                  </div>
                </div>
              </section>`,

  data () {
    return {
      // IDEA: Turn these static images into videos? See: https://davidwalsh.name/convert-to-webm
      featuredProjects: [
        {
          routeName: 'kozijnverbindingen',
          image: '/img/projects/kozijnverbindingen-1.png',
          video: '/img/projects/kozijnverbindingen-1.mov',
          title: 'Kozijnverbindingen',
        },
        {
          routeName: 'haringvliet',
          image: '/img/projects/haringvliet-1.png',
          video: '/img/projects/haringvliet-1.mov',
          title: 'Haringvliet',
        },
        {
          routeName: 'groenlinks-maak',
          image: '/img/projects/groenlinks-maak-1.png',
          title: 'GroenLinks Maak',
        },
        {
          routeName: 'kozijnisolatie',
          image: '/img/projects/kozijnisolatie-1.png',
          title: 'Kozijnisolatie',
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
            projectDuration = duration * 1.3,
            opacityDelay = duration * 0.3,
            textTransformStart = duration * 0,
            textOpacityStart = textTransformStart + opacityDelay,
            projectTransformStart = duration * 0.6,
            projectOpacityStart = projectTransformStart;

      tl.fromTo(this.$refs.text, transformDuration,
        {
          x: -60,
          scale: 0.97,
          skewX: 3,
        },
        {
          x: 0,
          scale: 1,
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
        const projectEl = this.$refs[`project${index + 1}`];

        tl.fromTo(projectEl, projectDuration,
          {
            y: -60,
            scale: 0.92,
          },
          {
            y: 0,
            scale: 1,
            ease: GSAP.Power3.easeOut,
          },
          projectTransformStart + (index + 1) * (duration * 0.2),
        );

        tl.fromTo(projectEl, projectDuration * 0.75,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: GSAP.Power2.easeInOut,
          },
          projectOpacityStart + (index + 1) * (duration * 0.2),
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