import { Component } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import {  fromEvent, map, Observable } from 'rxjs';
import { DetailsModalService } from '@shared/services/details-modal.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-details',
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.scss',
  imports: [
    AsyncPipe,
    HeaderComponent,
    NgClass,
  ],
  standalone: true
})
export class DetailsModalComponent {
  currentMovie$: Observable<MovieModel> = this.modalService.getCurrentMovie();

  constructor(
    private modalService: DetailsModalService,
    private localStorageService: LocalStorageService
  ) {}

  getPosterUrl(posterPath: string) {
    return `http://image.tmdb.org/t/p/w300${posterPath}`
  }

  getBackgroundUrl(backgroundPath: string) {
    return `http://image.tmdb.org/t/p/w1280${backgroundPath}`
  }

  closeModal() {
    this.modalService.close();
  }

  nextMovie() {
    this.modalService.nextMovie();
  }

  prevMovie() {
    this.modalService.prevMovie();
  }

  addToFavorites(movie: MovieModel) {
    if(this.isInFavorites(movie)) {
      return;
    }
    this.localStorageService.addFavorite(movie);
  }

  isInFavorites(movie: MovieModel): boolean {
    return !!this.localStorageService.getFavorites().filter((favMovie) => favMovie.id === movie.id).length;
  }

  isMediumScreen$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    map((value) => {
      return (value.target as Window).visualViewport!.width <= 1024 || (value.target as Window).innerWidth <= 1024
    }),
  );
}
