import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviePosition } from '@models/movie.model';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {
  @Input() moviePosition: MoviePosition = 'middle';

  @Output() closeModal = new EventEmitter<void>();
  @Output() nextMovie = new EventEmitter<void>();
  @Output() prevMovie = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onPrevMovie(): void {
    this.prevMovie.emit();
  }

  onNextMovie(): void {
    this.nextMovie.emit();
  }
}
