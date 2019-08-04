import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class Book {
  title: string;
  authors: string[];  
  tags?: string[];
  _links: any;
}
