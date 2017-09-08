import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'add',
        component: AddMovieComponent
    },
    {
        path: 'search/:term',
        component: SearchPageComponent
    }
];

@NgModule({
    imports: [
    RouterModule.forRoot(
        appRoutes
    )
    ],
    exports: [
    RouterModule
    ]
})

  export class AppRoutingModule{}