import { Injectable } from '@angular/core';
import { movieList } from './../examples';
import { Movie } from './../models/movie.model'
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MovieService {

  private movies: any[] = [];
  private movieList: any[];

  constructor() { 
    this.movieList = movieList;
  }

  getMovies(){
    this.movieList.forEach((value) => {
      this.movies.push(new Movie(
        value.id, value.name, value.director,
        value.imageUrl, value.duration,
        value.releaseDate, value.genres
        ));
    });

    return new Observable(( o: Observer<any>) =>{
      o.next(this.movies);
    });
  }

  search(term){
    
  let movie = this.movieList.filter(o => o.name == term);

  return new Observable((observable: Observer<any>) => {
      if (movie) {
        observable.next(movie);
      } 
      else {
        observable.error(movie);
      }
    });
      
  }
}
