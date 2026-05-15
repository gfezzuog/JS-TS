import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TvShow } from '../models/tvshow.model';
import { tmdbGet } from '../models/tmdbget.model';
import { tvGenre, TvGenresResponse } from '../models/tvgenre.model';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiUrl = environment.tmdbApiUrl;

  private selectedTvShowId!: number;

  constructor(private http: HttpClient) {}

  private id: any;
  getPopularTvShows(page: number = 1): Observable<tmdbGet> {
    console.log(`Chiamata HTTP PARTITA: ${this.apiUrl}`);
    return this.http.get<tmdbGet>(`${this.apiUrl}/tv/popular`, {
      params: { page },
    });
  }

  searchTvShows(query: string = '', page: number = 1): Observable<tmdbGet> {
    return query
      ? this.http.get<tmdbGet>(`${this.apiUrl}/search/tv`, {
          params: { query, page },
        })
      : this.getPopularTvShows(page);
  }

  getTvShowDetails(seriesId: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/tv/${seriesId}`, {});
  }

  getTvShowCredits(seriesId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tv/${seriesId}/credits`, {});
  }
  getTvShowGenres(): Observable<TvGenresResponse> {
    return this.http.get<TvGenresResponse>(`${this.apiUrl}/genre/tv/list`);
  }

  public logComponentInitInfo(componentName: string, backgroundColor: string) {
    console.debug(
      '%c%s',
      'background-color: ' +
        backgroundColor +
        '; color: #ffffff; padding: 20px 20px',
      componentName,
    );
  }

  public logDebug(message: any, backgroundColor: string) {
    console.debug(
      '%c%s',
      'background-color: ' +
        backgroundColor +
        '; color: #ffffff; padding: 10px 10px',
      message,
    );
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

// private headers = new HttpHeaders({
//   Authorization: `Bearer ${environment.tmdbToken}`,
//   'Content-Type': 'application/json',
// });
