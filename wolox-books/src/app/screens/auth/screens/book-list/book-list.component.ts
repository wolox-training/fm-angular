import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngrx/store';
import * as BooksReducer from '../../../../store/books.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;
  constructor(private bookService: BooksService, private store: Store<BooksReducer.State>) { }

  ngOnInit() {
    this.bookService.getBooks();
    this.books = this.store.select('books');
  }

}
