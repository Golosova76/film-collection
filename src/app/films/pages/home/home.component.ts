import { Component } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
