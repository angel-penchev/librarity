import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookPreviewComponent } from '../book-preview/book-preview.component';

@Component({
  selector: 'app-book',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: BookItemComponent;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openPreview() {
    const modalRef = this.modalService.open(BookPreviewComponent);
    modalRef.componentInstance.book = this.book;
  }

}
