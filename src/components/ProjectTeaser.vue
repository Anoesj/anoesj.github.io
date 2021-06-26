<template>
  <div
    class="project teaser"
    @click="$emit('show-full', projectData.id)"
    @mouseenter="mouseEnter"
    @mousemove="setRelativePercentages"
    @mouseleave="mouseLeave"
    :style="`--follow-mouse-transform: rotateY(calc(-0.1deg + ${xPos} * 0.2deg)) rotateX(calc(0.1deg - ${yPos} * 0.2deg))`"
  >
    <div
      class="background-wrapper"
      :class="{ 'preview-loading': !imageLoaded }"
    >
      <img
        v-if="projectData.preview"
        :src="projectData.preview.uri"
        :style="focusPoint"
        class="background"
      />
    </div>

    <div class="body">
      <h2 class="title">{{ projectData.subtitle }}</h2>
      <!-- <h3>{{ projectData.title }}</h3> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({

    props: [
      'projectData',
    ],

    data () {
      const { focusPoint } = this.projectData.preview;

      return {
        xPos: 0.5,
        yPos: 0.5,
        imageLoaded: false,
        focusPoint: {
          '--x': `${focusPoint.x}%`,
          '--y': `${focusPoint.y}%`,
        },
        // delayedHoverClassTimeout: 0,
        // extraClasses: new Set,
      };
    },

    created () {
      if (this.projectData.preview) {
        const previewImage = new Image();
        previewImage.onload = () => this.imageLoaded = true;
        previewImage.src = this.projectData.preview.uri;
      }
    },

    methods: {
      setRelativePercentages ({ clientX, clientY } : MouseEvent) {
        // const {
        //   width,
        //   height,
        //   x,
        //   y,
        // } = this.$el.getBoundingClientRect();

        // this.xPos = Math.min(1, Math.max(0, (clientX - x) / width));
        // this.yPos = Math.min(1, Math.max(0, (clientY - y) / height));
      },

      mouseEnter () {
        // this.delayedHoverClassTimeout = setTimeout(() => {
        //   this.extraClasses.add('delayed-hover');
        // }, 100);
      },

      mouseLeave () {
        // this.xPos = 0.5;
        // this.yPos = 0.5;
        // clearTimeout(this.delayedHoverClassTimeout);
        // this.extraClasses.delete('delayed-hover');
      },
    },

  });
</script>