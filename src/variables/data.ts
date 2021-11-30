export type Project = {
  id: string;
  title: string;
  subtitle: string;
  roles: string[];
  tasks: string[];
  /** URI and focuspoint of a preview image for the project */
  preview: {
    uri: string;
    focusPoint: {
      x: number;
      y: number;
    };
  };
};

export const projects : Project[] = [
  {
    id: 'they-made-me-kill-you',
    title: 'They Made Me Kill You (ft. Stella Polaris)',
    subtitle: 'Shiruwan',
    roles: ['project owner', 'songwriter', 'producer', 'engineer'],
    tasks: ['recording', 'keys', 'editing', 'production', 'mixing', 'mastering'],
    preview: {
      uri: '../img/projects/shiruwan.png',
      focusPoint: {
        x: 50,
        y: 60,
      },
    },
  },
  {
    id: 'alleen',
    title: 'Alleen',
    subtitle: 'A Mili',
    roles: ['engineer'],
    tasks: ['recording', 'editing', 'mixing', 'mastering'],
    preview: {
      uri: '../img/projects/amili.jpg',
      focusPoint: {
        x: 55,
        y: 26,
      },
    },
  },
  {
    id: 'cross-your-heart',
    title: 'Cross Your Heart',
    subtitle: 'Lilith Effie',
    roles: ['band member', 'producer', 'engineer'],
    tasks: ['recording', 'keys', 'editing', 'production', 'mixing', 'mastering'],
    preview: {
      uri: '../img/projects/lilitheffie.jpg',
      focusPoint: {
        x: 45,
        y: 11,
      },
    },
  },
  {
    id: 'change-the-game',
    title: 'Change the Game',
    subtitle: 'Colin Waters',
    roles: ['producer', 'engineer'],
    tasks: ['recording', 'editing', 'production', 'mixing'],
    preview: {
      uri: '../img/projects/colinwaters.png',
      focusPoint: {
        x: 45,
        y: 20,
      },
    },
  },
];

const featuredProjectIDs = ['alleen', 'cross-your-heart'];
export const featuredProjects : Project[] = projects.filter(project => featuredProjectIDs.includes(project.id));