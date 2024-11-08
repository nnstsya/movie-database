import { NgModule } from '@angular/core';

import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { MoviesService } from '@shared/services/movies.service';
import { AsyncPipe } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '@shared/components/header/header.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { DetailsModalComponent } from '@shared/components/details-modal/details-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    AsyncPipe,
    NgbTooltip,
    HeaderComponent,
    PaginationComponent,
    DetailsModalComponent,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ]),
  ],
  providers: [
    MoviesService
  ]
})
export class HomeModule { }
