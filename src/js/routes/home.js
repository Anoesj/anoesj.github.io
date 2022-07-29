import { GSAP } from '../NodeModules.js';

export const home = {

  debugTag: 'home',
  debugColor: 'green',

  template:  `<section class="home">
                <div
                  v-once
                  class="text"
                >
                  <div ref="text1">
                    <h1>Anoesj Sadraee</h1>
                    <h2>Full-stack web&shy;developer</h2>

                    <p>Gepolijste, gebruiksvriendelijke web apps, daar sta ik voor. Samen&shy;gevat ben ik een senior front-end developer, met kennis van back-end.</p>
                  </div>

                  <div ref="text2">
                    <h3>Samenwerken</h3>
                    <p>Naast technische ervaring, is goed luisteren en meedenken met klanten een van mijn kernwaarden in dit vak. Jou <strong>écht</strong> doorgronden en concrete waarde toevoegen, dat is waar het om draait. Door uit te zoeken tegen welke problemen jij of je klanten aanlopen en de benodigde domeinkennis te verzamelen, kunnen we samen werken aan een duurzame digitale oplossing op maat.</p>
                  </div>

                  <div ref="text3">
                    <h3>Technische kennis</h3>
                    <p>Tien jaar geleden ben ik begonnen als front-end webdeveloper. In de afgelopen jaren heb ik mij met name gespecialiseerd in JavaScript-gedreven applicaties. Denk hierbij aan een stack van Vue.js, CSS (SCSS), HTML en headless back-ends (API’s). Ook heb ik veel back-end ervaring opgedaan met Laravel, Node.js en Drupal.</p>
                  </div>

                  <div ref="text4">
                    <h3>Achtergrond</h3>
                    <p>Ik ben gevestigd in Eindhoven. Hier werk ik momenteel een vast aantal dagen op freelancebasis voor <a href="https://fonkel.io" class="link">Fonkel</a>, een digital agency in Amersfoort, waar ik werk aan Vue.js, Node.js, Laravel en Drupal projecten. Haar klanten betreft met name bedrijven in de bouw, techniek en maakindustrie. Met deze ervaring en een afgeronde gymnasiumopleiding met profiel natuur, techniek en gezondheid, ben ik in staat om complexe, bèta-georiënteerde projecten te doorgronden en realiseren.</p>

                    <p>Te midden van de pandemie heb ik mijn Bachelor of Music (HBO) behaald bij ArtEZ Institute of the Arts in Enschede. Toen ik ter afronding van de studie stage liep bij <a href="https://media.monks.com/" class="link">Media.Monks</a>, realiseerde ik mij steeds meer dat mijn professionele interesse meer bij programmeren ligt dan bij muziek. Na bijna een decennium in vaste dienst bij Fonkel gewerkt te hebben, ben ik nu als freelancer aan de slag gegaan.</p>
                  </div>

                  <div ref="text5">
                    <hr/>

                    <h3>Contact</h3>
                    <p>Heb je een uitdaging of vraag voor mij, dan ga ik graag met je in gesprek!</p>
                  </div>
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
        {
          routeName: 'spotify-audio-features',
          image: '/img/projects/spotify-audio-features-1.png',
          title: 'Spotify Audio Features',
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
            projectTransformStart = duration * 0.9,
            projectOpacityStart = projectTransformStart;

      const refs = [];
      let iRef = 1;

      while (this.$refs[`text${iRef}`]) {
        refs.push(this.$refs[`text${iRef}`]);
        iRef++;
      }

      // TODO: Make staggered animation or join text divs back together. See: https://greensock.com/docs/v3/Staggers
      tl.fromTo(refs, transformDuration,
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

      tl.fromTo(refs, opacityDuration,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        textOpacityStart,
      );

      // TODO: Try using 'stagger'. See: https://greensock.com/docs/v3/Staggers
      for (const i of this.featuredProjects.keys()) {
        const projectEl = this.$refs[`project${i + 1}`];

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
          projectTransformStart + (i * duration * 0.2),
        );

        tl.fromTo(projectEl, projectDuration * 0.75,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: GSAP.Power2.easeInOut,
          },
          projectOpacityStart + (i * duration * 0.2),
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