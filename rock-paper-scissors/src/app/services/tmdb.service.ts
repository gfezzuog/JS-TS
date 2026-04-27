import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiUrl = environment.tmdbApiUrl;

  private headers = new HttpHeaders({
    Authorization: `Bearer ${environment.tmdbToken}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getPopularTvShows(page: number = 1): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/tv/popular`,
      {
        headers: this.headers,
        params: { page }
      }
    );
  }
}
``