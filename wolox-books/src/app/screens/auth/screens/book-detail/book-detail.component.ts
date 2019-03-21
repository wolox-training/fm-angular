import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private booksService: BooksService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('id')) {
          this.router.navigateByUrl('/books/book-list');
          return;
        }
        const id = paramMap.get('id');
        this.booksService.getBookDetails(id).subscribe(
          response => this.book = response,
          error => console.log(error)
        );
      }
    );

  }

}
