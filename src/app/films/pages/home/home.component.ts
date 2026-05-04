import { Component, inject } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private filmService = inject(FilmService);

  public readonly films = this.filmService.films;
}
