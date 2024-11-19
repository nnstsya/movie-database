import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MovieModel, MoviePosition } from '@models/movie.model';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { DetailsModalService } from '@shared/services/details-modal.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.css'
})
export class DetailsModalComponent implements AfterViewChecked {
  @ViewChild('overviewText') overviewTextRef!: ElementRef;
  currentMovie$: Observable<MovieModel> = this.modalService.getCurrentMovie();
  isExpanded: boolean = false;
  isOverflowing: boolean = false;

  isMediumScreen$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    startWith({ target: window }),
    map((value) => {
      return (value.target as Window).visualViewport!.width <= 768 || (value.target as Window).innerWidth <= 768;
    }),
  );

  constructor(
    private modalService: DetailsModalService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    if (this.overviewTextRef) {
      this.checkIfOverflowing();
    }
  }

  checkIfOverflowing(): void {
    const el: HTMLParagraphElement = this.overviewTextRef.nativeElement;
    const previousOverflowing = this.isOverflowing;

    this.isOverflowing = el.scrollHeight > 81;

    if (previousOverflowing !== this.isOverflowing) {
      this.cdr.detectChanges();
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  getMoviePosition(): MoviePosition {
    if(this.modalService.hasPrev() && this.modalService.hasNext()) {
      return MoviePosition.MIDDLE;
    } else if(this.modalService.hasNext()) {
      return MoviePosition.FIRST;
    } else if(this.modalService.hasPrev()) {
      return MoviePosition.LAST;
    }
    return MoviePosition.ONLY;
  }

  getPosterUrl(posterPath: string): string {
    return `http://image.tmdb.org/t/p/w300${posterPath}`;
  }

  getBackgroundUrl(backgroundPath: string): string {
    return `http://image.tmdb.org/t/p/w1280${backgroundPath}`;
  }

  handleCloseModal(): void {
    this.modalService.close();
  }

  handleNextMovie(): void {
    this.modalService.nextMovie();
  }

  handlePrevMovie(): void {
    this.modalService.prevMovie();
  }

  addToFavorites(movie: MovieModel): void {
    if (this.isInFavorites(movie)) {
      return;
    }
    this.localStorageService.addFavorite(movie);
  }

  removeFromFavorites(movie: MovieModel): void {
    this.localStorageService.removeFavorite(movie);
  }

  isInFavorites(movie: MovieModel): boolean {
    return !!this.localStorageService.getFavorites().find((favMovie) => favMovie.id === movie.id);
  }
}
