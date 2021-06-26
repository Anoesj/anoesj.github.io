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

    app.config.globalProperties.$wait = (ms: number) => {
      return new Promise(async resolve => {
        setTimeout(resolve, ms);
      });
    };

    app.config.globalProperties.$cloneObject = (object: any) => {
      if (object === undefined) return undefined;
      else if (object === null) return null;
      return JSON.parse(JSON.stringify(Object.assign({}, object)));
    };

    const getCSSVariable = (varName: string) => {
      return window.getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    };

    const convertCSSDurationToSeconds = (duration: string) => {
      return parseFloat(duration) / ((duration.includes('ms') ? 1000 : 1));
    };

    app.config.globalProperties.$getCSSVariable = getCSSVariable;
    app.config.globalProperties.$convertCSSDurationToSeconds = convertCSSDurationToSeconds;

    app.config.globalProperties.$transitionDuration = convertCSSDurationToSeconds(getCSSVariable('--speed-slow')) as number;
    app.config.globalProperties.$angle = parseFloat(getCSSVariable('--angle'));

  },

};