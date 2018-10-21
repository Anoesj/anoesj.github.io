export const projectTeaser = {
  props: [
    'id',
    'title',
    'subtitle',
    'roles',
    'tasks',
  ],

  template:  `<div class="project" @click="$emit('show-full', id)">
                <h3>{{ title }}</h3>
                <h4>{{ subtitle }}</h4>
                <div class="roles" v-if="roles.length">
                  <h5>Roles</h5>
                  <ul>
                    <li v-for="role in roles">
                      {{ role }}
                    </li>
                  </ul>
                </div>
              </div>`,

  // methods: {
  //   teaserClick: function () {
  //     this.$emit('');
  //   },
  // }
};