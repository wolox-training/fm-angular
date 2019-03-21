import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
