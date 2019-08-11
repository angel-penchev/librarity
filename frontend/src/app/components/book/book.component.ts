import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookPreviewComponent } from '../layout/book-preview/book-preview.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookComponent;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openPreview() {
    const modalRef = this.modalService.open(BookPreviewComponent);
    modalRef.componentInstance.book = this.book;
  }

}
