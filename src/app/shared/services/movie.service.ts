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

  return new Observable((o: Observer<any>) => {
      if (movie) {
        o.next(movie);
      } 
      else {
        o.error(movie);
      }
    });
  }

  addMovie(movie: Movie){
    console.log(movie);
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/movies', {
        name: movie.name,
        director: movie.director,
        imageUrl: movie.imageUrl,
        duration: movie.duration,
        releaseDate: movie.releaseDate,
        genres: movie.genres.split(',')
      }).subscribe((movie: any) => {
        let m = new Movie(movie.id, movie.name, movie.director, movie.imageUrl, movie.duration, movie.releaseDate, movie.genres);
        this.movies.push(m);
        o.next(m);
        return o.complete();
      }), () => {
        console.log('Error');
      };
    });
  }
}
