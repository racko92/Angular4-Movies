import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

  constructor(private movie: MovieService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {

    this.route.params.subscribe(() => {

      let term = this.route.snapshot.paramMap.get('term');
      
      this.movie.search(term).subscribe(data => {
        this.movie = data;
      },
      (err:HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
      });
    });
  }

}