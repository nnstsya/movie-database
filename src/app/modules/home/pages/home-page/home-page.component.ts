import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { MovieModel, MovieResponseModel } from '@models/movie.model';
import { MoviesService } from '@shared/services/movies.service';
import { DetailsModalService } from '@shared/services/details-modal.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  movies: MovieModel[] = [];
  currentPage: number = 1;
  collectionSize: number = 0;
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;

  constructor(
    private moviesService: MoviesService,
    private detailsModalService: DetailsModalService,
    private destroyRef: DestroyRef,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

  openMovieModal(index: number): void {
    this.detailsModalService.open(this.movies, index);
  }

  getPosterUrl(posterPath: string): string {
    return `http://image.tmdb.org/t/p/w300${posterPath}`
  }

  loadMovies(page: number): void {
    this.loaderService.setLoading(true);
    this.moviesService.getAll(page).pipe(
      delay(200),
      map((response => {
        this.collectionSize = response.total_results / 10;
        this.movies = response.results;
        this.loaderService.setLoading(false);
      })),
      takeUntilDestroyed(this.destroyRef),
      catchError(() => {
        this.loaderService.setLoading(false);
        return of(<MovieResponseModel>{});
      })
    ).subscribe();
  }

  onPageChange(newPage: number): void {
    if (this.currentPage !== newPage) {
      this.currentPage = newPage;
      this.loadMovies(newPage);
    }
  }
}
