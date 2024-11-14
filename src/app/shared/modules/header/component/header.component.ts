import { Component } from '@angular/core';
import { DetailsModalService } from '@shared/services/details-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private modalService: DetailsModalService) {}

  closeModal(): void {
    this.modalService.close();
  }
}
