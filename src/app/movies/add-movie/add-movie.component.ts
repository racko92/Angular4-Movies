import { Component, Injector, EventEmitter, Output} from '@angular/core';
import { MovieService } from './../../shared/services/movie.service';
import { Movie } from './../../shared/models/movie.model';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html'
})

export class AddMovieComponent {

 @Output() onSubmit = new EventEmitter<Movie>();

  private newMovie: Movie = new Movie()

  constructor(
    private injector: Injector,
    private router: Router,
    private movieService: MovieService, 
  ) { }
  addMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
