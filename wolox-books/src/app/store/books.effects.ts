import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BooksService } from '../services/books.service';
import * as BookActions from './books.actions';
@Injectable()
export class BooksEffects {

  @Effect()
  loadBooks$ = this.actions$
    .pipe(
      ofType(BookActions.GET_BOOKS),
      mergeMap(() => this.booksService.getBooks()
        .pipe(map(books => new BookActions.SetBooks(books)))
      )
    );

  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}
