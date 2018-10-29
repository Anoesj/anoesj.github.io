export const projectTeaser = {
  props: [
    'projectData',
  ],

  template:  `<div class="project" @click="$emit('show-full', projectData.id)">
                <img v-if="projectData.preview" :src="projectData.preview" class="preview">
                <h3>{{ projectData.title }}</h3>
                <h4>{{ projectData.subtitle }}</h4>
                <div class="roles" v-if="projectData.roles.length">
                  <h5>Roles</h5>
                  <ul>
                    <li v-for="role in projectData.roles">
                      {{ role }}
                    </li>
                  </ul>
                </div>
              </div>`,

};