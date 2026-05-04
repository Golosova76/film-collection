import { Component, computed, inject, signal } from '@angular/core';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import { FilmService } from '../../services/film.service';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';

@Component({
  selector: 'app-home',
  imports: [FilmCardComponent, AutoFocusDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private filmService = inject(FilmService);

  public readonly films = this.filmService.films;

  protected readonly isLoading = this.filmService.isLoading;
  protected readonly error = this.filmService.error;

  protected readonly searchValue = signal<string>('');

  protected readonly filteredFilms = computed(() => {
    const searchValue = this.searchValue().trim().toLowerCase();
    const films = this.filmService.films();

    if (!searchValue) {
      return films;
    }

    return films.filter((film) => {
      return film.title.toLowerCase().includes(searchValue);
    });
  });

  protected onSearchChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchValue.set(inputElement.value);
  }

  protected readonly hasFilteredFilms = computed(() => {
    return this.filteredFilms().length > 0;
  });

  public toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
