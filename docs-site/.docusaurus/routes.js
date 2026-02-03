import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6ce'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9fc'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cde'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'd33'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/developer/architecture',
                component: ComponentCreator('/docs/developer/architecture', '05a'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developer/audio-engine',
                component: ComponentCreator('/docs/developer/audio-engine', '81e'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developer/onboarding',
                component: ComponentCreator('/docs/developer/onboarding', '172'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developer/state-management',
                component: ComponentCreator('/docs/developer/state-management', '29d'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developer/ui-system',
                component: ComponentCreator('/docs/developer/ui-system', 'd31'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/user/animate-engine',
                component: ComponentCreator('/docs/user/animate-engine', 'd4d'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/g8-device',
                component: ComponentCreator('/docs/user/g8-device', 'c94'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/granulator',
                component: ComponentCreator('/docs/user/granulator', '4c2'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/reflect-device',
                component: ComponentCreator('/docs/user/reflect-device', '242'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/silk-device',
                component: ComponentCreator('/docs/user/silk-device', '8e1'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/syndrm-engine',
                component: ComponentCreator('/docs/user/syndrm-engine', '4cd'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/tape-deck-engine',
                component: ComponentCreator('/docs/user/tape-deck-engine', '988'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/texture-device',
                component: ComponentCreator('/docs/user/texture-device', '050'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/user-manual',
                component: ComponentCreator('/docs/user/user-manual', '12c'),
                exact: true,
                sidebar: "userSidebar"
              },
              {
                path: '/docs/user/void-seed-engine',
                component: ComponentCreator('/docs/user/void-seed-engine', '2e6'),
                exact: true,
                sidebar: "userSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fd5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
