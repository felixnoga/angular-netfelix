import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { FilmitemComponent } from './filmItem/filmitem/filmitem.component';

@NgModule({
  declarations: [FilmsComponent, FilmitemComponent],
  exports: [FilmsComponent],
  imports: [CommonModule],
})
export class FilmsModule {}
