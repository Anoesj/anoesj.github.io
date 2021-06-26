<template>
  <SiteNavigation :visible="navigationVisible"/>

  <router-view
    ref="routeView"
    @showNavigation="showNavigation"
    v-slot="{ Component, route }"
  >
    <transition
      appear
      @enter="(...args) => { animateRouteComponentIn(Component, ...args); }"
      @leave="(...args) => { animateRouteComponentOut(Component, ...args); }"
      :css="false"
      :mode="transitionMode"
    >
      <component
        :is="Component"
        v-bind="route.params"
      />
    </transition>
  </router-view>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    BaseTransitionProps,
    ComponentPublicInstance,
  } from 'vue';

  import SiteNavigation from './components/SiteNavigation.vue';

  export default defineComponent({

    debugTag: 'main',
    debugColor: 'darkorange',

    components: {
      SiteNavigation,
    },

    setup () {
      const routeView = ref<ComponentPublicInstance>();

      return {
        routeView,
      };
    },

    data () {
      return {
        navigationVisible: false,
        transitionMode: 'out-in' as BaseTransitionProps['mode'],
      };
    },

    methods: {
      showNavigation () {
        this.navigationVisible = true;
      },

      // BaseTransitionProps['onEnter']
      async animateRouteComponentIn (Component, el, done) {
        const inAnimatingComponent = Component.ref.r.value as ComponentPublicInstance;

        if (inAnimatingComponent == null) {
          return;
        }

        inAnimatingComponent.$log('animateIn');

        const cb = () => {
          inAnimatingComponent.$log('done with animateIn');
          done();
        };

        if (typeof inAnimatingComponent.animateIn === 'function') {
          await inAnimatingComponent.animateIn(el, cb, !this.navigationVisible);
        }

        else {
          cb();
        }
      },

      // BaseTransitionProps['onLeave']
      async animateRouteComponentOut (Component, el, done) {
        const outAnimatingComponent = Component.ref.r.value as ComponentPublicInstance;

        if (outAnimatingComponent == null) {
          return;
        }

        outAnimatingComponent.$log('animateOut');

        const cb = () => {
          outAnimatingComponent.$log('done with animateOut');
          done();
        };

        if (typeof outAnimatingComponent.animateOut === 'function') {
          await outAnimatingComponent.animateOut(el, cb);
        }

        else {
          cb();
        }
      },
    },

  });
</script>

<style lang="scss">
  @import './scss/styles.scss';
</style>