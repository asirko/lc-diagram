import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '00-intro',
      },
      {
        path: '00-intro',
        loadComponent: () => import('../features/00-intro/intro.component'),
      },
      {
        path: '01-svg-example',
        data: { title: 'SVG\xa0?' },
        loadComponent: () => import('../features/01-svg-example/svg-example.component'),
      },
      {
        path: '02-component-svg',
        data: { title: 'En composant\xa0?' },
        loadComponent: () => import('../features/02-component-svg/component-svg.component'),
      },
      {
        path: '03-static-graph',
        data: { title: 'Diagramme statique' },
        loadComponent: () => import('../features/03-static-graph/static-graph.component'),
      },
      {
        path: '04-cubic-bezier',
        data: { title: 'Exemple interactif' },
        loadComponent: () => import('../features/04-cubic-bezier/cubic-bezier.component'),
      },
      {
        path: '05-diagram',
        data: { title: 'Diagramme' },
        loadComponent: () => import('../features/05-diagram/diagram.component'),
      },
    ],
  },
];
