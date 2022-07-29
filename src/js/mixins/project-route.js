export const projectRoute = {

  methods: {
    async animateIn (...args) {
      return this.$refs.project.animateIn(...args);
    },

    async animateOut (...args) {
      return this.$refs.project.animateOut(...args);
    },
  },

};