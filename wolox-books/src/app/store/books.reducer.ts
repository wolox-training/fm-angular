import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as BookActions from './books.actions';

export interface State {
  books: Book[];
}

export function booksReducer(state: State, action: BookActions.Actions) {
  switch (action.type) {
    case BookActions.SET_BOOKS:
      return {...state, books: action.payload};
  }
}
