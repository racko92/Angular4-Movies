import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { SearchComponent } from './search.component';
import { SearchPageComponent } from './search-page/search-page.component'


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    SearchComponent,
    SearchPageComponent
  ],
  exports: [
    SearchComponent,
    SearchPageComponent
  ]
})
export class SearchModule { }
