import { NgModule } from '@angular/core';

import {
  NgbPagination,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationPrevious
} from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, NgIf } from '@angular/common';
import { PaginationComponent } from '@shared/modules/pagination/component/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    NgbPagination,
    NgbPaginationFirst,
    NgbPaginationPrevious,
    NgbPaginationNext,
    NgbPaginationLast,
    AsyncPipe,
    NgIf
  ],
  exports: [PaginationComponent],
})
export class PaginationModule { }
