import { Component } from '@angular/core';
import { FilmsService } from 'src/app/films/services/films.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  queryTerm: string = '';

  constructor(private filmsService: FilmsService) {}

  search() {
    if (this.queryTerm == '') return;
    this.filmsService.searchMovies(this.queryTerm);
    this.queryTerm = '';
  }
}
