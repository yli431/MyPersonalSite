// @project
// import { PAGE_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

// @project

export const projects = {
  heading: 'Projects',
  primaryBtn: { children: 'More coming soon..' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Christchurch Real Estate Data Center',
      subTitle: 'Store, manage, demonstrate, and analyze data that may impact the real estate market in Christchurch.',
      image: `${imagePrefix}/data_centre.jpeg`,
      link: '#'
      // link: PAGE_PATH.hero
    },
    {
      animationDelay: 0.3,
      title: '2024 Petition Platform Web Client',
      subTitle: 'Using React/JavaScript, implementing eighteen user stories.',
      image: `${imagePrefix}/petition.jpeg`,
      link: '#'
      // link: PAGE_PATH.cta
    },
    {
      animationDelay: 0.4,
      title: 'Google Restaurant Reviews Analysis',
      subTitle: 'Investigates the potential relationships among different values on the Google Restaurant platform.',
      image: `${imagePrefix}/reviews.jpeg`,
      link: '#'
      // link: PAGE_PATH.feature
    }
  ]
};
