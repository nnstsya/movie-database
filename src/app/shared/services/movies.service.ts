import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { MovieModel, MovieResponseModel } from '@models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  getAll(page: number): Observable<MovieResponseModel> {
    const params: HttpParams = new HttpParams().set('page', page);
    return this.httpClient.get<MovieResponseModel>('now_playing', { params }).pipe(
      catchError(() => of(<MovieResponseModel>{}))
    );
  }

  getById(id: number): Observable<MovieModel> {
    return this.httpClient.get<MovieModel>('' + id).pipe(
      catchError(() => of())
    )
  }
}
