import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SearchPageComponent } from './search/search-page/search-page.component';

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