import { projects } from '../variables/data.js';

// TODO: Animatie openen project: https://tympanus.net/Blueprints/ZoomSlider/

export const projectsOverview = {

  debugTag: 'projects',
  debugColor: 'brown',

  props: [
    'showFeaturedProject'
  ],

  template:  `<section class="projects">
                <h1>Projects</h1>

                <div class="projects-wrapper">
                  <project-teaser
                    v-for="project in projects"
                    :key="project.id"
                    :projectData="project"
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
      // await this.animation(this.$root.transitionDuration/2);

      await this.$wait(750);
      if (initial === true) this.$emit('showNavigation', true);
      done();
    },

    showFullProject: function (projectID) {
      this.$router.push(`/projects/${projectID}`);
    },

    closeModal: function () {
      this.$router.push(`/projects`);
    }
  },

};