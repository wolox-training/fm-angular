import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input() book: Book;

  constructor(private router: Router) { }

  bookDetails() {
    this.router.navigateByUrl(`/books/${this.book.id}`);
  }

}
