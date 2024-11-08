import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {API_KEY} from "@tokens/environment.token";
import { MovieModel, MovieResponseModel } from '@models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = inject(API_KEY)
  private http = inject(HttpClient)

  getAll(page: number): Observable<MovieResponseModel> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page);
    return this.http.get<MovieResponseModel>(this.baseUrl + 'now_playing', { params }).pipe(
      catchError(error => {
        return of(<MovieResponseModel>{});
      })
    );
  }

  getById(id: number): Observable<MovieModel> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
    return this.http.get<MovieModel>(this.baseUrl + id, { params }).pipe(
      catchError(error => {
        return of();
      })
    )
  }
}
