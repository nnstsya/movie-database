import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
  @Input() collectionSize: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  currentPage: number = 1;

  isSmallScreen$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    startWith({ target: window }),
    map((value) => {
      return (value.target as Window).visualViewport!.width <= 576 || (value.target as Window).innerWidth <= 576
    }),
  );

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.currentPage = this.localStorageService.getCurrentPage();
    this.pageChange.emit(this.currentPage);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.localStorageService.updateCurrentPage(newPage);
    this.pageChange.emit(newPage);
  }
}
