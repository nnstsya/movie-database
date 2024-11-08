import {
  Component,
  input,
  OnInit,
  output
} from '@angular/core';
import {
  NgbPagination,
  NgbPaginationFirst, NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationPrevious
} from '@ng-bootstrap/ng-bootstrap';
import { fromEvent, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  imports: [
    NgbPagination,
    NgbPaginationFirst,
    NgbPaginationPrevious,
    NgbPaginationNext,
    NgbPaginationLast,
    AsyncPipe
  ],
  standalone: true
})
export class PaginationComponent implements OnInit{
  collectionSize= input(0);
  currentPage: number = 1;
  pageChange = output<number>();
  isInitialLoad: boolean = true;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.currentPage = this.localStorageService.getCurrentPage()();
    this.pageChange.emit(this.currentPage);
  }

  changePage(newPage: number): void {
    if (this.isInitialLoad) {
      this.isInitialLoad = false;
      return;
    }

    this.currentPage = newPage;
    this.localStorageService.updateCurrentPage(newPage);
    this.pageChange.emit(newPage);
  }

  isSmallScreen$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    map((value) => {
      return (value.target as Window).visualViewport!.width <= 576 || (value.target as Window).innerWidth <= 576
    }),
  );
}
