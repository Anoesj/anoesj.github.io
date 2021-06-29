import { Plugin } from 'vue';

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $log: string
//   }
// }

export const CustomVueExtensions : Plugin = {

  install (app) {

    // Installeer een global mixin 'log'
    // Elke component met static properties 'debugTag' (string) en 'debugColor' (CSS kleurcode/-naam) kan op
    // deze manier makkelijk debuggen. Logjes verschijnen alleen als $root.debug === true.
    app.mixin({
      methods: {
        // de vm.$log() functie kan overal gebruikt worden om alleen te loggen als debug modus aanstaat
        // en de logjes te taggen en een kleurtje te geven.
        $log (...args: any[]) {
          if (import.meta.env.DEV === true && ('debugTag' in this.$options) && ('debugColor' in this.$options)) {
            const messages = [`%c[${this.$options.debugTag}]`];

            for (const [delta, partOfLog] of args.entries()) {
              if (delta === 0) {
                messages.push(`color: ${this.$options.debugColor};`);

                if (typeof partOfLog === 'string') {
                  messages[0] += ` ${partOfLog}`;
                }

                else {
                  messages.push(partOfLog);
                }
              }

              else {
                messages.push(partOfLog);
              }
            }

            console.log(...messages);
          }
        },
      }
    });

  },

};