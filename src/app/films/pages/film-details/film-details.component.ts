import { Component, computed, inject, input } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  protected readonly id = input.required<string>();
  private readonly filmService = inject(FilmService);

  protected readonly film = computed(() => {
    return this.filmService.getFilmById(Number(this.id()));
  });
}
