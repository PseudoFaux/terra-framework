import homeReadMe from './README.md';
import componentConfig from './generatedComponentConfig';

const siteConfig = {
  /* The component configuration path. */
  componentConfig,

  /* The logo to display as the placeholder. */
  placeholderSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

  /* The markdown content to display on the home page. */
  readMeContent: homeReadMe,

  appConfig: {
    /* The logo for the site header. */
    logoSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

    /* The title for the site header. */
    title: 'Terra Framework',

    extensions: {
      gitHubUrl: 'https://github.com/cerner/terra-framework',
    },
  },
};

export default siteConfig;
