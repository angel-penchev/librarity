import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
  title: string;
  description: string;
  authorsNames: string[];
  genresNames: string[];
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
