export const who = {
  template:  `<section class="who" :class="stateClass">
                <img src="/img/me.jpg" style="max-width:680px;">
                <div class="right" ref="text">
                  <h1>Hi, I'm Anoesj</h1>
                </div>
              </section>`,

  methods: {
    animateIn: function () {
      return new Promise(resolve => {
        this.$refs.text.addEventListener('transitionend', resolve);
        this.stateClass = 'active';
      });
    },

    animateOut: function () {
      return new Promise(resolve => {
        this.$refs.text.addEventListener('transitionend', resolve);
        this.stateClass = '';
      });
    }
  },

  mounted: async function () {
    await this.$wait(100);
    this.stateClass = 'active';
  },

  data: function () {
    return {
      stateClass: ''
    };
  }
};