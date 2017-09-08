import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../models/movie.model'
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MovieService {

  private movies: any[] = [];
  private movieList: any[];

  constructor(
    private http: HttpClient
  ) { 
    // this.movieList = movieList;
  }

  getMovies(){
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/movies').subscribe((movies: any[]) => {
        this.movies = movies.map((movie) => {
          return new Movie(movie.id, movie.name, movie.director,movie.imageUrl, movie.duration, movie.releaseDate, movie.genres);
        });
        o.next(this.movies);
        return o.complete();
      })
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
