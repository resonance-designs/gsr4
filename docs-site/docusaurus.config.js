// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GrainRust Docs',
  tagline: 'Documentation for the GrainRust sampler',
  url: 'https://grainrust.local',
  baseUrl: './',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  organizationName: 'grainrust',
  projectName: 'grainrust',
  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'GrainRust',
      items: [
        { to: '/docs/intro', label: 'Developer Docs', position: 'left' },
        { to: '/', label: 'Docs Home', position: 'left' }
      ]
    },
    prism: {}
  }
};

module.exports = config;
