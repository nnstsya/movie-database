import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { MovieResponseModel } from '@models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  getAll(page: number): Observable<MovieResponseModel> {
    const params = new HttpParams().set('page', page);
    return this.httpClient.get<MovieResponseModel>('now_playing', { params }).pipe(
      catchError(() => of(<MovieResponseModel>{}))
    );
  }
}
