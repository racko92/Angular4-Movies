import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  searchMovie(term){
    this.router.navigate(['/search/' + term]);
  }
}
