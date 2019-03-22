import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { BookCardComponent } from './screens/book-list/components/book-card/book-card.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ]
})
export class AuthModule { }
