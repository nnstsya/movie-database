import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MovieModel, MovieResponseModel } from '@models/movie.model';
import { MoviesService } from '@shared/services/movies.service';
import { DetailsModalService } from '@shared/services/details-modal.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  movies$: Observable<MovieResponseModel> = of(<MovieResponseModel>{});
  movies: MovieModel[] = [];
  currentPage: number = 1;
  collectionSize: number = 0;

  openMovieModal(index: number) {
    this.detailsModalService.open(this.movies, index);
  }

  constructor(private moviesService: MoviesService, private detailsModalService: DetailsModalService) {}

  ngOnInit() {
    this.loadMovies(this.currentPage);
  }

  getPosterUrl(posterPath: string) {
    return `http://image.tmdb.org/t/p/w300${posterPath}`
  }

  loadMovies(page: number) {
    this.movies$ = this.moviesService.getAll(page).pipe(
      map((response => {
        this.collectionSize = response.total_results / 10;
        this.movies = response.results;
        return response;
      }))
    );
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.loadMovies(newPage);
  }
}
