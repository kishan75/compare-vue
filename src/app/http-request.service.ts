import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { pluck } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";;

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private categoriesURL = 'https://movie-search-project.herokuapp.com';

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesURL).pipe(pluck('categories'));
  }

  getMovies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.categoriesURL}/movie/`).pipe(pluck('results'));
  }

  constructor(private http: HttpClient) { }
}
