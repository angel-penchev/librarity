import { Component, OnInit } from '@angular/core';
import { BookListService } from 'src/app/services/book-list.service'
import { BookItem, BooksRequest } from 'src/app/models/book/book.module';
import { Observable } from 'rxjs';
declare var $: any;

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
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    items: 1,
    dots: true,
    nav: true
  };

  constructor(private bookListService: BookListService) { }

  ngOnInit() {
    let booksObservable: Observable<BooksRequest> = this.bookListService.getBooks();
    booksObservable.subscribe(data => {
      this.books = data["_embedded"].books.filter(function (books) {
        return books.genresNames.includes("New") || books.genresNames.includes("Trending");
      }
      );
    })
  }
}
