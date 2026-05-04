import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './films/pages/home/home.component';
import { FilmDetailsComponent } from './films/pages/film-details/film-details.component';
import { AboutComponent } from './films/pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: 'films/:id', component: FilmDetailsComponent, data: { breadcrumb: 'Film Title' } },
      { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
      { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not Found' } },
    ],
  },
];
