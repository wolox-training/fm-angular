import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const SET_BOOKS = 'SET_BOOKS';

export class SetBooks implements Action {
  readonly type = SET_BOOKS;
  constructor(public payload: Book[]) {}
}

export type Actions =  SetBooks;
