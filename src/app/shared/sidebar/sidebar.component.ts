import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/films/services/films.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {}
  get history() {
    return this.filmsService.history;
  }
}
