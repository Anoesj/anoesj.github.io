export const projectTeaser = {
  props: [
    'projectData',
  ],

  template:  `<div class="project" @click="$emit('show-full', projectData.id)">
                <div class="background-wrapper">
                  <img
                    v-if="projectData.preview"
                    :src="projectData.preview.uri"
                    :style="focusPoint"
                    class="background"
                  >
                </div>

                <div class="body">
                  <h2 class="title">{{ projectData.subtitle }}</h2>
                  <!-- <h3>{{ projectData.title }}</h3> -->
                </div>

                <div class="roles" v-if="projectData.roles.length">
                  <h5>Roles</h5>
                  <ul>
                    <li v-for="role in projectData.roles">
                      {{ role }}
                    </li>
                  </ul>
                </div>
              </div>`,

  data () {
    const { focusPoint } = this.projectData.preview;
    return {
      focusPoint: {
        '--x': `${focusPoint.x}%`,
        '--y': `${focusPoint.y}%`,
      },
    };
  },

};