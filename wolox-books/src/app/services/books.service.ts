import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as BookReducer from '../store/books.reducer';
import * as Actions from '../store/books.actions';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient, private store: Store<BookReducer.State>) { }

  getBooks() {
    this.http.get<Book[]>(`${environment.apiUrl}/books`).subscribe(
      response => {
        this.store.dispatch(new Actions.SetBooks(response));
      },
      error => console.log(error)
    );
  }

  getBookDetails(id): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/books/${id}`);
  }
}
