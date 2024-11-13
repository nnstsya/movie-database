import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import { DetailsModalService } from '@shared/services/details-modal.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  favoriteMovies: MovieModel[] = [];

  constructor(private localStorageService: LocalStorageService, private detailsModalService: DetailsModalService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteMovies = this.localStorageService.getFavorites();
  }

  removeFromFavorites(movie: MovieModel): void {
    this.localStorageService.removeFavorite(movie);
    this.loadFavorites();
  }

  getPosterUrl(posterPath: string): string {
    return `http://image.tmdb.org/t/p/w300${posterPath}`;
  }

  openMovieModal(index: number): void {
    this.detailsModalService.open(this.favoriteMovies, index);
  }
}
