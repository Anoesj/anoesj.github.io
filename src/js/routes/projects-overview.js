import { projects } from '../variables/data.js';
import { GSAP } from '../NodeModules.js';

// TODO: Animatie openen project: https://tympanus.net/Blueprints/ZoomSlider/

export const projectsOverview = {

  debugTag: 'projects',
  debugColor: 'brown',

  props: [
    'showFeaturedProject'
  ],

  template:  `<section class="projects">
                <div class="projects-wrapper">
                  <h1>Projects</h1>
                  <project-teaser
                    v-for="(project, i) in projects"
                    :key="project.id"
                    :ref="project.id"
                    :projectData="project"
                    :style="{ '--nth': i + 1 }"
                    @show-full="showFullProject"
                  />
                </div>

                <div class="modal" v-if="showFeaturedProject === true" style="position:fixed;top:0;right:0;bottom:0;left:0;background-color:white;">
                  OW SICK PROJECT MAN
                  <span @click="closeModal">X</span>
                </div>
              </section>`,

  data: function () {
    return {
      projects: projects
    };
  },

  methods: {
    async animateIn (el, done, initial = false) {
      await this.animation(this.$root.transitionDuration/2);

      if (initial === true) this.$emit('showNavigation', true);
      done();
    },

    async animation (duration, reverse = false) {
      const tl = new GSAP.TimelineLite({
        paused: true, // TODO: timeline blijkt dus wel meteen te starten, dus zorg dat initial styles wel geapplied worden maar geen start
      });

      let i = 0;
      for (const [projectID, projectTeaserComponent] of Object.entries(this.$refs)) {
        const projectTeaser = projectTeaserComponent[0].$el;

        tl.fromTo(projectTeaser, duration,
          {
            scale: 0,
            // opacity: 0,
          },
          {
            scale: 1,
            // opacity: 1,
            // rotation: this.$root.angle,
            ease: GSAP.Power3.easeInOut,
          },
          duration * i * 0.5
        );
        i++;
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

    showFullProject: function (projectID) {
      this.$router.push(`/projects/${projectID}`);
    },

    closeModal: function () {
      this.$router.push(`/projects`);
    }
  },

};