<template>
  <section class="reach-me" v-once>
    <a :href="`mailto:${emailAddress}`">{{ emailAddress }}</a>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({

    debugTag: 'reach-me',
    debugColor: 'dodgerblue',

    data () {
      return {
        emailAddress: 'contact@anoesjsadraee.com',
      };
    },

  });
</script>