import { Component, OnInit } from '@angular/core';
import { RequestBooksService } from 'src/app/services/request-books.service'
import { BookItem } from 'src/app/models/book-item.module';
import { Observable } from 'rxjs';
import { BooksRequest } from 'src/app/models/book-request.module';

@Component({
  selector: 'app-book-showcase',
  templateUrl: './book-showcase.component.html',
  styleUrls: ['./book-showcase.component.css'],
})
export class BookShowcaseComponent implements OnInit {
  books: BookItem[];
  mySlideOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    nav: false
  };

  constructor(private bookListService: RequestBooksService) { }

  ngOnInit() {
    let booksObservable: Observable<BooksRequest> = this.bookListService.getBooks();
    booksObservable.subscribe(data => {
      this.books = data["_embedded"].books.filter(function (books) {
        return books.tags.includes("New") || books.tags.includes("Trending");
      }
      );
    })
  }
}
