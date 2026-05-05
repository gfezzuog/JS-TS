import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TvShow } from '../models/tvshow.model';
import { tmdbGet } from '../models/tmdbget.model';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiUrl = environment.tmdbApiUrl;

  // private headers = new HttpHeaders({
  //   Authorization: `Bearer ${environment.tmdbToken}`,
  //   'Content-Type': 'application/json',
  // });

  constructor(private http: HttpClient) {}

  getPopularTvShows(
    page: number = 1,
  ): Observable<tmdbGet> {
    console.log(`Chiamata HTTP PARTITA: ${this.apiUrl}`)
    return this.http.get<tmdbGet>(`${this.apiUrl}/tv/popular`, {
      params: { page }
    });
  }

  getTvShowDetails(seriesId: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/tv/${seriesId}`, {
      // headers: this.headers,
    });
  }

  getTvShowCredits(seriesId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tv/${seriesId}/credits`, {
      // headers: this.headers,
    });
  }
}

// https://api.themoviedb.org/3/tv/{series_id}/credits

// RICHIESTA HTTP INTEGRALE
/*getPopularTvShows(page: number = 1): Observable<{page: number, results: TvShow[],total_pages: number, total_results: number}> {
    return this.http.get<any>(
      `${this.apiUrl}/tv/popular`,
      {
        headers: this.headers,
        params: { page }
      }
    );
  }
  
  getTvShowDetails(seriesId: number): Observable<TvShow>{
    return this.http.get<TvShow>(
      `${this.apiUrl}/tv/${seriesId}`,
      {headers: this.headers}
    )
  }

  getTvShowCredits(seriesId: number): Observable<any>{
    return this.http.get<any>(
      `${this.apiUrl}/tv/${seriesId}/credits`,
      {headers: this.headers}
    )
  }*/
