import { Component } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import { FilmDetailsComponent } from '../film-details/film-details.component';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent, FilmDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
