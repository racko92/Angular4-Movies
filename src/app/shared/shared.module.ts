import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { MovieRowComponent } from '../movies/movie-row/movie-row.component';
import { SearchModule } from './../search/search.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MovieRowComponent
  ],
  providers:[
    MovieService,
  ],
  declarations: [
    MovieRowComponent
  ]
})
export class SharedModule { }
