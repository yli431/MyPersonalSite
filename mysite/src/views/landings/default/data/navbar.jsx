// @project

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  navItems: [
    { id: 'home', title: 'HOME', link: '/' },
    { id: 'skills', title: 'SKILLS', referenceId: 'skills', ...linkProps },
    { id: 'abilities', title: 'ABILITIES', referenceId: 'abilities' },
    { id: 'projects', title: 'PROJECTS', referenceId: 'projects', ...linkProps },
    { id: 'experiences', title: 'EXPERIENCES', referenceId: 'experiences', ...linkProps },
  ]
};
