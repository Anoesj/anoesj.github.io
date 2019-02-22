import { projects } from '../variables/data.js';

// TODO: Animatie openen project: https://tympanus.net/Blueprints/ZoomSlider/

export const projectsOverview = {

  debugTag: 'projects',
  debugColor: 'brown',

  props: [
    'showFeaturedProject'
  ],

  template:  `<section class="projects">
                <project-teaser
                  v-for="project in projects"
                  :key="project.id"
                  :projectData="project"
                  @show-full="showFullProject"
                />
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
    showFullProject: function (projectID) {
      this.$router.push(`/projects/${projectID}`);
    },

    closeModal: function () {
      this.$router.push(`/projects`);
    }
  },

};