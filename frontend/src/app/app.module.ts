import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BookShowcaseComponent } from './components/layout/book-showcase/book-showcase.component';
import { SearchFormComponent } from './components/layout/search-form/search-form.component';
import { UserStatusComponent } from './components/layout/user-status/user-status.component';
import { HomeBtnComponent } from './components/layout/home-btn/home-btn.component';
import { BookSlideComponent } from './components/book-slide/book-slide.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    HeaderComponent,
    FooterComponent,
    BookShowcaseComponent,
    SearchFormComponent,
    UserStatusComponent,
    HomeBtnComponent,
    BookSlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
