import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Exalens',
  tagline: 'Accelerating Digital Transformation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://exalens.github.io',
  // url: 'https://docs.exalens.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/userguide',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'exalens', // Usually your GitHub org/user name.
  projectName: 'userguide', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',
  colorMode: {
    defaultMode: 'light',
    disableSwitch: true, // Disable the switch to prevent changing to dark mode
  },
    navbar: {      
      logo: {
        alt: 'Exalens',
        src: 'img/exalens-logo-small-2022-dark-grey.png',
      },     
    },
    footer: {
      style: 'dark',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
