import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookAddComponent } from './book-add/book-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'categories',
    component: CategoryComponent,
    data: { title: 'Category List' }
  },
  {
    path: 'category-details/:id/:title',
    component: CategoryDetailComponent,
    data: { title: 'Category Details' }
  },
    {
    path: 'search',
    component: BookSearchComponent,
    data: { title: 'Book Search' }
  },
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryDetailComponent,
    BookSearchComponent,
    BookAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
