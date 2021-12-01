import { GSAP } from '../NodeModules.js';

export const about = {

  debugTag: 'who',
  debugColor: 'green',

  template:  `<section class="who" v-once>
                <img
                  v-if="photoVisible === true"
                  src="/img/me_2020.jpg"
                  class="me"
                  ref="me"
                />

                <div class="text" ref="text">
                  <h1>Hi, I’m Anoesj.</h1>
                  <p>A web developer mainly focused on creating slick, usable web apps. I am experienced with JavaScript, CSS, Vue.js, writing APIs and more. More importantly however, I’ve learned to <strong>really</strong> understand the clients I work with. Finding out what problems they are facing, gathering domain knowledge and working towards a sustainable solution.</p>
                  <h3>Background</h3>
                  <p>I learned so much at <a href="https://fonkel.io" class="link">Fonkel</a>, where I worked on Drupal, Vue.js and Laravel projects on and off in the past decade. In the meantime, I finished my Bachelor of Music in 2020 at ArtEZ Institute of the Arts in Enschede, The Netherlands. During my (audio related) internship at <a href="https://media.monks.com/" class="link">Media.Monks</a>, I realized my interest lies mainly in programming. Since then, I’ve started freelancing alongside working at Fonkel.</p>
                  <!-- TODO: Maybe move this to a sticky footer instead? -->
                  <!-- <p>As you can see, this website is fairly incomplete. A new one is in the works, but for now, you can reach me on any of the following platforms:</p>
                  <p class="social-links">
                    <a href="https://www.linkedin.com/in/anoesj/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/anoesj"><i class="fab fa-twitter"></i></a>
                    <a href="https://github.com/anoesj"><i class="fab fa-github"></i></a>
                  </p> -->
                </div>

                <div class="featured-projects" ref="featuredProjects">
                  <router-link :to="{ name: 'project--haringvliet' }">Haringvliet</router-link>
                  <router-link :to="{ name: 'project--kozijnverbindingen' }">Kozijnverbindingen</router-link>
                  <router-link :to="{ name: 'project--groenlinks-maak' }">GroenLinks Maak</router-link>
                </div>
              </section>`,

  data () {
    return {
      photoVisible: false,
    };
  },

  methods: {
    async animateIn (el, done, initial = false) {
      await this.animation(this.$root.transitionDuration / 2);

      if (initial === true) {
        this.$emit('showNavigation', true);
      }

      done();
    },

    async animateOut (el, done) {
      await this.animation(this.$root.transitionDuration / 3, true);
      done();
    },

    async animation (duration, reverse = false) {
      const tl = new GSAP.TimelineLite();

      if (this.photoVisible === true) {
        tl.fromTo(this.$refs.me, duration,
          {
            scale: 0,
            opacity: 0,
            rotation: -120,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: this.$root.angle,
            ease: GSAP.Power3.easeInOut,
          },
        );
      }

      tl.fromTo(this.$refs.text, duration * 1.5,
        {
          x: -50,
          rotation: this.$root.angle,
        },
        {
          x: 0,
          rotation: this.$root.angle,
          ease: GSAP.Power4.easeInOut,
        },
        duration * -0.2,
      );

      tl.fromTo(this.$refs.text, duration * 0.75,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: GSAP.Power2.easeInOut,
        },
        duration * 0.3,
      );

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