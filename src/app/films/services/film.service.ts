import { computed, effect, Injectable, resource, signal } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly filmsUrl = '/assets/data/films.json';

  private readonly filmsState = signal<Film[]>([]);

  readonly filmResource = resource<Film[], unknown>({
    loader: async ({ abortSignal }): Promise<Film[]> => {
      const response = await fetch(this.filmsUrl, {
        signal: abortSignal,
      });

      if (!response.ok) {
        throw new Error('Failed to load films');
      }

      const films = (await response.json()) as Film[];

      return films;
    },
  });

  constructor() {
    effect(() => {
      const films = this.filmResource.value();

      if (films) {
        this.filmsState.set(films);
      }
    });
  }

  readonly films = this.filmsState.asReadonly();

  readonly favoriteFilms = computed(() => this.filmsState().filter((film) => film.isFavorite));

  readonly isLoading = this.filmResource.isLoading;

  readonly error = this.filmResource.error;

  public getFilmById(id: number) {
    return this.filmsState().find((film) => film.id === id);
  }

  public toggleFavorite(id: number) {
    this.filmsState.update((films) =>
      films.map((film) => (film.id === id ? { ...film, isFavorite: !film.isFavorite } : film))
    );
  }
}
