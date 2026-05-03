import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './films/pages/home/home.component';
import { FilmDetailsComponent } from './films/pages/film-details/film-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: '', component: FilmDetailsComponent, data: { breadcrumb: 'Film Title' } },
    ],
  },
];
