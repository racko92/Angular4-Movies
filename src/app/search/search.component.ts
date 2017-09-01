import { Component } from '@angular/core';
import { Movie } from './../shared/models/movie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  private movie: Movie;

  constructor(private router: Router) { }

  searchMovie(term){
    this.router.navigate(['/search/:' + term]);
  }
}
