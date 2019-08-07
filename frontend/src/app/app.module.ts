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
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { BookContentComponent } from './components/pages/book-content/book-content.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
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
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    BookContentComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books/:id', component: BookContentComponent },
      { path: 'books', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
