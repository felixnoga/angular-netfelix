import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMovies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private _history: string[] = [];
  private _films: IMovies = {};

  get history() {
    return [...this._history]; //devolvemos una copia del array en lugar de hacerlo por referencia
  }

  get films() {
    return this._films;
  }
  constructor(private http: HttpClient) {}

  addToHistory(queryTerm: string) {
    this._history.unshift(queryTerm.toLowerCase());
    this._history.splice(15);
    console.log(this._history);
  }

  searchMovies(queryTerm: string) {
    if (queryTerm !== '') {
      this.http
        .get(
          `http://www.omdbapi.com/?s=${queryTerm.trim().toLowerCase()}&apikey=${
            environment.apiKey
          }`
        )
        .subscribe((res) => {
          this._films = res;
        });
      this.addToHistory(queryTerm);
    }
  }
}
