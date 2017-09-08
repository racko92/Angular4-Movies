import { Component, Injector } from '@angular/core';
import { MovieService } from './../shared/services/movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from './../shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  private movies: any[] = [];

  constructor(
    private movieService: MovieService,
    private injector: Injector
  ) 
  {
    this.movieService = this.injector.get(MovieService)
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      (err:HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);        
      }
    );
  }

  addMovie(movie: Movie) {
    console.log(movie);
    this.movieService.addMovie(movie).subscribe();
  }
}
