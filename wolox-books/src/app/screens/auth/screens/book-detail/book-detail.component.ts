import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../../../../models/book.model';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private booksService: BooksService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id');
        if (id) {
          this.router.navigateByUrl('/books/book-list');
          return;
        }
        this.booksService.getBookDetails(id).subscribe(
          response => this.book = response,
          error => console.log(error)
        );
      }

    );

  }

}
