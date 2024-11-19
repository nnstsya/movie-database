import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviePosition } from '@models/movie.model';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {
  @Input() moviePosition: MoviePosition = MoviePosition.ONLY;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextMovie: EventEmitter<void> = new EventEmitter<void>();
  @Output() prevMovie: EventEmitter<void> = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onPrevMovie(): void {
    this.prevMovie.emit();
  }

  onNextMovie(): void {
    this.nextMovie.emit();
  }

  protected readonly MoviePosition = MoviePosition;
}
