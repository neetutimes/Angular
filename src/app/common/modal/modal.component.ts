import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any;
  constructor(private modalService: ModalService, private el: ElementRef) { 
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const modal = this;
    if (!this.id) {
      console.error('id can not be blank or null');
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'opaque-modal-background') {
          modal.close();
      }
    });

  this.modalService.add(this);

  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');

  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
  }

}
