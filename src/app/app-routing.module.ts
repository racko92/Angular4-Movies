import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';

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