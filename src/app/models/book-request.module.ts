import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from './book-item.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class BooksRequest {
  _embedded: {
    books: BookItem[];
  }
  _links: {
    self: {
      href: string;
      templated: boolean;
    },
    profile: {
      href: string
    },
    search: {
      href: string;
    }
  }
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
}
