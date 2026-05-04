import { Component, input, output } from '@angular/core';
import { Film } from '../../models/film.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  public film = input.required<Film>();

  public readonly favoriteToggled = output<number>();

  public toggleFavorite(): void {
    this.favoriteToggled.emit(this.film().id);
  }
}
