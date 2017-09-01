import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Movie } from './../../shared/models/movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent{

  @Input()
  set movieRow(movie: Movie){
    this.movie = movie;
  }
  constructor() { }

  private movie: Movie;

}
