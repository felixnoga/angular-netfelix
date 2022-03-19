import { Component } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  get films() {
    return this.filmsService.films.Search;
  }
  constructor(private filmsService: FilmsService) {}
}
