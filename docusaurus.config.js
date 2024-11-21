// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

import ConfigLocalized from './docusaurus.config.localized.json';

// By default, we use Docusaurus Faster
// DOCUSAURUS_SLOWER=true is useful for benchmarking faster against slower
// hyperfine --prepare 'yarn clear' --runs 3 'DOCUSAURUS_SLOWER=true yarn build:fast' 'yarn build:fast'
const isSlower = process.env.DOCUSAURUS_SLOWER === 'true';
if (isSlower) {
  console.log('🐢 Using slower Docusaurus build');
}

const defaultLocale = 'en';

function getLocalizedConfigValue(key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

export default async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: getLocalizedConfigValue('title'),
    tagline: getLocalizedConfigValue('tagline'),
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://laravel.0x123.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    trailingSlash: false,

    titleDelimiter: '-',

    future: {
      experimental_faster: !isSlower,
    },

    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '150x150',
          href: 'img/apple-touch-icon.png',
        },
      },
    ],

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      localeConfigs: {
        en: {
          label: '🇺🇸 English',
        },
        zh: {
          label: '🇨🇳 简体中文',
          htmlLang: 'zh-CN',
        },
      },
    },

    markdown: {
      format: 'detect',
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: './sidebars.js',
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: ({ version, docPath }) => {
              return `https://github.com/laravel/docs/edit/${version}/${docPath}`;
            },
            versions: {
              current: {
                label: 'Master',
                path: 'master',
              },
              // '11.x': {
              //   banner: 'none',
              //   path: '11.x',
              // },
            },
          },
          blog: false,
          theme: {
            customCss: './src/css/custom.css',
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/social-card.jpg',
        navbar: {
          title: 'Laravel',
          logo: {
            alt: 'Laravel Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Tutorial',
            },
            {
              label: 'Documentation',
              to: '/docs/installation',
              position: 'left',
            },
            {
              label: 'API',
              to: 'pathname:///api/',
              position: 'left',
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/laravel',
              className: 'header-github-link',
              position: 'right',
            },
            {
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                  label: 'X',
                  href: 'https://x.com/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
        colorMode: {
          respectPrefersColorScheme: true,
        },
      }),
  };
}
