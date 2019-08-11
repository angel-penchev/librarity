import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { logging } from 'protractor';



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

export class BookItem {
  id: number;
  title: string;
  description: string;
  authors: string[];
  tags: string[];
  rating: number;
  _links: {
    self: {
      href: string;
    },
    book: {
      href: string;
      templated: boolean;
    },
    genres: {
      href: string;
    },
    authors: {
      href: string;
    }
  }
}
