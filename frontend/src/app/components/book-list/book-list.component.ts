import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/book-list.service'
import { Book } from 'src/app/models/book/book.module';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookListService: BookListService)  { }

  ngOnInit() {
    this.books = [
      {
        "title": "Java for dum dums",
        authors: [
          "John Johnson"
        ],
        "_links": {
          "self": {
            "href": "http://127.0.0.1:8080/books/1"
          },
          "book": {
            "href": "http://127.0.0.1:8080/books/1{?projection}",
            "templated": true
          },
          "bookAuthors": {
            "href": "http://127.0.0.1:8080/books/1/bookAuthors"
          }
        }
      },
      {
        "title": "Obama is gone",
        authors: [
          "Donald J. Trump"
        ],
        "_links": {
          "self": {
            "href": "http://127.0.0.1:8080/books/2"
          },
          "book": {
            "href": "http://127.0.0.1:8080/books/2{?projection}",
            "templated": true
          },
          "bookAuthors": {
            "href": "http://127.0.0.1:8080/books/2/bookAuthors"
          }
        }
      },
      {
        "title": "The tale of the THICC BOI",
        authors: [
          "Georgi Marinov"
        ],
        "_links": {
          "self": {
            "href": "http://127.0.0.1:8080/books/3"
          },
          "book": {
            "href": "http://127.0.0.1:8080/books/3{?projection}",
            "templated": true
          },
          "bookAuthors": {
            "href": "http://127.0.0.1:8080/books/3/bookAuthors"
          }
        }
      }
    ]
  }

}
