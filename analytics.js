import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-D2GVEWT5B7');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};