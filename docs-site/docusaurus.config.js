// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TLBX-1 Docs',
  tagline: 'Documentation for the TLBX-1 Audio Toolbox',
  url: 'https://tlbx-1.local',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'resonancedesigns',
  projectName: 'tlbx-1',
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
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
      title: 'TLBX-1',
      logo: {
        alt: 'TLBX-1 Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left', exact: true },
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: 'User Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'devSidebar',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          href: 'https://github.com/resonance-designs/tlbx-1',
          label: 'GitHub',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/resonancedesigns',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/resonance-designs/tlbx-1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Resonance Designs. Built with Docusaurus.`,
    },
    prism: {}
  }
};

module.exports = config;
