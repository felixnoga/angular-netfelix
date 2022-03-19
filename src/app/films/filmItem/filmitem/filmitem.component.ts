import { Component, Input } from '@angular/core';
import { Search, Types } from '../../interfaces/movies.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.scss'],
})
export class FilmitemComponent {
  @Input() film: Search = {
    Title: '',
    Year: '',
    imdbID: '',
    Type: Types.Movie,
    Poster: 'string',
  };

  constructor(private filmsService: FilmsService) {}
}
