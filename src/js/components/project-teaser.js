export const projectTeaser = {

  props: [
    'projectData',
  ],

  created () {
    if (this.projectData.preview) {
      const previewImage = new Image();
      previewImage.onload = () => this.imageLoaded = true;
      previewImage.src = this.projectData.preview.uri;
    }
  },

  template:  `<div class="project teaser" @click="$emit('show-full', projectData.id)">
                <div class="background-wrapper" :class="{ 'preview-loading': !imageLoaded }">
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
      imageLoaded: false,
      focusPoint: {
        '--x': `${focusPoint.x}%`,
        '--y': `${focusPoint.y}%`,
      },
    };
  },

};