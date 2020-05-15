export const CustomVueExtensions = {

  install: function (Vue, options) {

    // Installeer een global mixin 'log'
    // Elke component met static properties 'debugTag' (string) en 'debugColor' (CSS kleurcode/-naam) kan op
    // deze manier makkelijk debuggen. Logjes verschijnen alleen als $root.debug === true.
    Vue.mixin({
      methods: {
        // de vm.$log() functie kan overal gebruikt worden om alleen te loggen als debug modus aanstaat
        // en de logjes te taggen en een kleurtje te geven.
        $log: function (...args) {
          if (this.$root.config.debug === true && ('debugTag' in this.$options) && ('debugColor' in this.$options)) {
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

    Vue.prototype.$wait = ms => {
      return new Promise(async resolve => {
        await setTimeout(resolve, ms);
      });
    };

    Vue.prototype.$cloneObject = object => {
      if (object === undefined) return undefined;
      else if (object === null) return null;
      return JSON.parse(JSON.stringify(Object.assign({}, object)));
    };

    Vue.prototype.$getCSSVariable = varName => window.getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

    Vue.prototype.$convertCSSDurationToSeconds = duration => parseFloat(duration) / ((duration.includes('ms') ? 1000 : 1));

  },

};