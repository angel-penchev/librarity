import { Component, OnInit } from '@angular/core';
import { BookListService } from 'src/app/services/book-list.service'
import { BookItem, BooksRequest } from 'src/app/models/book/book.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: BookItem[];
  constructor(private bookListService: BookListService)  { }

  ngOnInit() {
    let booksObservable: Observable<BooksRequest> = this.bookListService.getBooks();
    booksObservable.subscribe(data=>{
      this.books = data["_embedded"].books;
    })
  }

}
