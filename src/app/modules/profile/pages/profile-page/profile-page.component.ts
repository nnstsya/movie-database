import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import { DetailsModalService } from '@shared/services/details-modal.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  favoriteMovies: MovieModel[] = [];

  constructor(private localStorageService: LocalStorageService, private detailsModalService: DetailsModalService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteMovies = this.localStorageService.getFavorites();
  }

  removeFromFavorites(movie: MovieModel) {
    this.localStorageService.removeFavorite(movie);
    this.loadFavorites();
  }

  getPosterUrl(posterPath: string) {
    return `http://image.tmdb.org/t/p/w300${posterPath}`;
  }

  openMovieModal(index: number) {
    this.detailsModalService.open(this.favoriteMovies, index);
  }
}
