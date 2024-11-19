import { Injectable } from '@angular/core';
import { MovieModel } from '@models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _favouritesStorageKey = 'favoriteMovies';
  private _currentPageStorageKey = 'currentPage';

  getFavorites(): MovieModel[] {
    const favorites = localStorage.getItem(this._favouritesStorageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(movie: MovieModel): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem(this._favouritesStorageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(movie: MovieModel): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== movie.id);
    localStorage.setItem(this._favouritesStorageKey, JSON.stringify(favorites));
  }

  getCurrentPage(): number {
    const currentPage = localStorage.getItem(this._currentPageStorageKey);
    return currentPage ? +currentPage : 1;
  }

  updateCurrentPage(page: number): void {
    if (page > 0) {
      localStorage.setItem(this._currentPageStorageKey, page.toString());
    }
  }
}
