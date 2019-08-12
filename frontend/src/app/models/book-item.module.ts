import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

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
