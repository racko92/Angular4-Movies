import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../shared/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

  constructor(private movie: MovieService,
              private route: ActivatedRoute,
              private router: Router
            ) { 
  }

  ngOnInit() {

    this.route.params.subscribe(() => {

      let term = this.route.snapshot.paramMap.get('term');
      
      this.movie.search(term).subscribe(data => {
        this.movie = data;
      },
      (term) => {
          alert(`Backend returned code ${term.status} with message: ${term.error}`);
          
        });
    });
  }

}