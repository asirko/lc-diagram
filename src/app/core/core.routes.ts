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
        redirectTo: '01-svg-example',
      },
      {
        path: '01-svg-example',
        title: 'SVG\xa0?',
        loadComponent: () => import('../features/01-svg-example/svg-example.component'),
      },
      {
        path: '02-component-svg',
        title: 'En composant\xa0?',
        loadComponent: () => import('../features/02-component-svg/component-svg.component'),
      },
      {
        path: '03-static-graph',
        title: 'Diagramme statique',
        loadComponent: () => import('../features/03-static-graph/static-graph.component'),
      },
      {
        path: '04-cubic-bezier',
        title: 'Exemple interactif',
        loadComponent: () => import('../features/04-cubic-bezier/cubic-bezier.component'),
      },
      {
        path: '05-dynamic-graph',
        title: 'Diagramme',
        loadComponent: () => import('../features/05-diagram/diagram.component'),
      },
    ],
  },
];
