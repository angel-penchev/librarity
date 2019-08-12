import { Component, OnInit } from '@angular/core';
import { RequestBooksService } from 'src/app/services/request-books.service'
import { BookItem } from 'src/app/models/book-item.module';
import { BooksRequest } from 'src/app/models/book-request.module';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: BookItem[];
  constructor(private bookListService: RequestBooksService)  { }

  ngOnInit() {
    let booksObservable: Observable<BooksRequest> = this.bookListService.getBooks();
    booksObservable.subscribe(data=>{
      this.books = data["_embedded"].books;
    })
  }

}
