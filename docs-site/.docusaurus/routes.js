import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/./docs',
    component: ComponentCreator('/./docs', 'fa5'),
    routes: [
      {
        path: '/./docs',
        component: ComponentCreator('/./docs', 'c32'),
        routes: [
          {
            path: '/./docs',
            component: ComponentCreator('/./docs', '4ae'),
            routes: [
              {
                path: '/./docs/DEVELOPER_ONBOARDING',
                component: ComponentCreator('/./docs/DEVELOPER_ONBOARDING', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/./docs/intro',
                component: ComponentCreator('/./docs/intro', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/./docs/TODO',
                component: ComponentCreator('/./docs/TODO', 'ddb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/./docs/user-manual',
                component: ComponentCreator('/./docs/user-manual', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/./',
    component: ComponentCreator('/./', 'ed5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
