<template>
  <section class="projects">
      <div class="projects-wrapper">
        <h1>Projects</h1>
        <ProjectTeaser
          v-for="(project, i) in projects"
          :key="project.id"
          :ref="project.id"
          :projectData="project"
          style="opacity: 0;"
          :style="{ '--nth': i + 1 }"
          @show-full="showFullProject"
        />
      </div>

      <div
        v-if="showFeaturedProject === true"
        class="modal"
      >
        OW SICK PROJECT MAN
        <span @click="closeModal">X</span>
      </div>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { gsap, Power3 } from 'gsap';

  // @ts-ignore TypeScript being TypeScript
  import { projects } from '../variables/data.ts';
  import ProjectTeaser from '../components/ProjectTeaser.vue';

  // TODO: Animatie openen project: https://tympanus.net/Blueprints/ZoomSlider/

  export default defineComponent({

    debugTag: 'projects',
    debugColor: 'brown',

    props: {
      showFeaturedProject: Boolean,
    },

    components: {
      ProjectTeaser,
    },

    inject: [
      'transitionDuration',
      'wait',
    ],

    data () {
      return {
        // TODO: use 'provide' for full/teaser views?
        projects,
      };
    },

    methods: {
      async animateIn (el, done, initial = false) {
        await this.wait(200);
        await this.animation(this.transitionDuration / 2);

        if (initial === true) {
          this.$emit('showNavigation', true);
        }

        done();
      },

      async animation (duration: number, reverse = false) {
        const tl = gsap.timeline({
          paused: true, // TODO: timeline blijkt dus wel meteen te starten, dus zorg dat initial styles wel geapplied worden maar geen start
        });

        let i = 0;
        for (const [projectID, projectTeaserComponent] of Object.entries(this.$refs)) {
          const projectTeaser = projectTeaserComponent.$el;

          tl.fromTo(projectTeaser,
            {
              scale: 0.65,
              opacity: 0,
            },
            {
              duration,
              scale: 1,
              opacity: 1,
              // rotation: this.$root.angle,
              ease: 'smooth',
            },
            duration * i * 0.15,
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

      showFullProject (projectID) {
        this.$router.push({ name: 'featured-project', params: { projectID } });
      },

      closeModal () {
        this.$router.push({ name: 'project-overview' });
      },
    },

  });
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
  }
</style>