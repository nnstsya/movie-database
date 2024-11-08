import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MovieModel } from '@models/movie.model';
import { DetailsModalComponent } from '@shared/components/details-modal/details-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DetailsModalService {
  private movies: MovieModel[] = [];
  private currentMovieIndex$ = new BehaviorSubject<number>(0);
  private modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  open(movies: MovieModel[], startIndex: number = 0): void {
    this.movies = movies;
    this.currentMovieIndex$.next(startIndex);

    this.modalRef = this.modalService.open(DetailsModalComponent, { fullscreen: true });
    this.modalRef.componentInstance.movies = this.movies;
    this.modalRef.componentInstance.currentMovieIndex = startIndex;

    this.modalRef.result.finally(() => this.close());
  }

  close(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  nextMovie(): void {
    const newIndex = this.currentMovieIndex$.value + 1;
    if (newIndex < this.movies.length) {
      this.currentMovieIndex$.next(newIndex);
    }
  }

  prevMovie(): void {
    const newIndex = this.currentMovieIndex$.value - 1;
    if (newIndex >= 0) {
      this.currentMovieIndex$.next(newIndex);
    }
  }

  getCurrentMovie(): Observable<MovieModel> {
    return this.currentMovieIndex$.asObservable().pipe(
      map(index => this.movies[index])
    );
  }
}
