import { Injectable, signal, WritableSignal } from '@angular/core';
import { MovieModel } from '@models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private favouritesStorageKey = 'favoriteMovies';
  private currentPageStorageKey = 'currentPage';

  getFavorites(): MovieModel[] {
    const favorites = localStorage.getItem(this.favouritesStorageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(movie: MovieModel): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem(this.favouritesStorageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(movie: MovieModel): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== movie.id);
    localStorage.setItem(this.favouritesStorageKey, JSON.stringify(favorites));
  }

  getCurrentPage(): WritableSignal<number> {
    const currentPage = localStorage.getItem(this.currentPageStorageKey);
    return currentPage ? signal(Number(currentPage)) : signal(1);
  }

  updateCurrentPage(page: number): void {
    if (page > 0) {
      localStorage.setItem(this.currentPageStorageKey, page.toString());
    }
  }
}
