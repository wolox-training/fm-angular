import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Store } from '@ngrx/store';
import * as BooksReducer from '../../../../store/books.reducer';
import * as BookActions from '../../../../store/books.actions';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books = this.store.select('books');
  constructor(private bookService: BooksService, private store: Store<BooksReducer.State>) { }

  ngOnInit() {
    this.store.dispatch(new  BookActions.GetBooks());
  }

}
