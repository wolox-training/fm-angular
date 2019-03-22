import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../../../../models/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      response => this.books = response,
      error => console.log(error)
    );
  }

}
