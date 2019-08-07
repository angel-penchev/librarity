import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookItem, BooksRequest } from '../models/book/book.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BookListService {
  bookListURL: string = "http://127.0.0.1:8080/books"
  books: BooksRequest;
  constructor(private http:HttpClient) { }

  getBooks():Observable<BooksRequest> {
    return this.http.get<BooksRequest>(this.bookListURL, httpOptions);
  }
}
