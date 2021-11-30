<template>
  <section class="who">
    <div class="who__row who__row--contains-intro">
      <div class="who__left" ref="me">
        <img src="/img/me_2020.jpg" class="me"/>
      </div>

      <div class="who__right" ref="text">
        <h1>Hey! I’m Anoesj</h1>
        <div class="things-i-am-wrapper">
          <h3>
            <vue-typer
              :text="thingsIAm"
              :preTypeDelay="preTypeDelay"
              :typeDelay="60"
              :preEraseDelay="3000"
              :eraseDelay="40"
              eraseStyle="backspace"
              caretAnimation="phase"
            />
          </h3>
        </div>
      </div>
    </div>

    <div class="who__row who__row--contains-text">
      <p>Web developer, electronic musician, digital explorer... Whatever you want to call it, it’s usually something with sound, programming, or both!</p>
      <p>Traditionally, this is where I should write about the companies I’ve worked for – and I will – but first let me tell you why I think that’s not super important.</p>
      <p>I believe in explorers, not in people with a smooth talk or big credits (a million dollar smile?). Who you’ve worked for doesn’t define you, it’s what you make (do?) and how you’ve got there that’s interesting.<br/>
      I try to be that explorer as often as I can. I’m the type of person who likes a challenge, who wants to push limits and think big. Sometimes that means I have to scale down my ideas and look at the practical side. I will always try to think ahead, find creative new ways to solve a problem.</p>

      <p>Working with passionate people energizes me. I believe in giving people the space to do what they do best, not restrain people.</p>

      <p>So, of course you want to know who I worked for.</p>
      <h5>Dev:</h5>
      <ul>
        <li>Fonkel</li>
        <li>Gebr. Bodegraven</li>
        <li>Hilti</li>
        <li>fischer</li>
        <li>Spit</li>
        <li>Haringvliet</li>
        <li>GroenLinks</li>
        <li>Easylink?</li>
        <li>SRA?</li>
        <li>OPUS pods?</li>
        <li>Nederlandse Branchevereniging voor de Timmerindustrie</li>
        <li>Accoya (Accsys Technologies?)</li>
        <li>ByDANA</li>
      </ul>
      <h5>Music:</h5>
      <ul>
        <li>MediaMonks</li>
        <li>Google</li>
        <li>Spotify</li>
        <li>Knorr</li>
        <li>HP</li>
        <li>Pharmaton</li>
        <li>Blue Nile</li>
        <li>Kensington</li>
        <li>Universal Music Group</li>
        <li>OPI</li>
        <li>Oracle</li>
        <li>Sanofi</li>
        <li>A Mili</li>
        <li>Lilith Effie</li>
        <li>Colin Waters</li>
      </ul>
      <h5>Pitches:</h5>
      <ul>
        <li>(Eurovision Song Contest)</li>
        <li>(Porsche)</li>
        <li>(McDonalds)</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { gsap, Power2, Power3, Power4 } from 'gsap/all';
  import { VueTyper } from '../plugins/vue-typer';

  export default defineComponent({

    debugTag: 'who',
    debugColor: 'green',

    components: {
      VueTyper,
    },

    inject: [
      'transitionDuration',
      'angle',
      'wait',
    ],

    setup () {
      const thingsIAm = [
        'Full-stack Web Developer.',
        'Critical thinker.',
        'Calm and professional.',
        // 'An Electronic Music Producer',
      ];

      let preTypeDelay = ref<number>(1200);

      return {
        thingsIAm,
        preTypeDelay,
      };
    },

    methods: {
      async animateIn (el, done, initial = false) {
        await this.animation(this.transitionDuration/2);

        if (initial === true) {
          // const prevPreTypeDelay = this.preTypeDelay;
          this.preTypeDelay = 350;
          // await this.wait(prevPreTypeDelay / 2);
          this.$emit('showNavigation', true);
        }

        done();
      },

      async animateOut (el, done) {
        await this.animation(this.transitionDuration/3, true);
        done();
      },

      async animation (duration, reverse = false) {
        const tl = gsap.timeline();

        const { me, text } : {
          me: HTMLElement;
          text: HTMLElement;
        } = this.$refs;

        const angle = this.angle as number;

        tl.fromTo(me,
          {
            scale: 0,
            opacity: 0,
            rotation: -120,
          },
          {
            duration,
            scale: 1,
            opacity: 1,
            rotation: angle,
            ease: Power3.easeInOut,
          },
          // Absolute time
          duration * 0,
        );

        tl.fromTo(text,
          {
            x: -50,
            rotation: angle,
          },
          {
            duration: duration * 1.5,
            x: 0,
            rotation: angle,
            ease: Power4.easeInOut,
          },
          // Absolute time
          duration * 0.2,
        );

        tl.fromTo(text,
          {
            opacity: 0,
          },
          {
            duration: duration * 0.75,
            opacity: 1,
            ease: Power2.easeInOut,
          },
          // Absolute time
          duration * 0.8,
        );

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
    },

  });
</script>