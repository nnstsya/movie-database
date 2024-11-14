import { NgModule } from '@angular/core';

import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { MoviesService } from '@shared/services/movies.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@shared/modules/header/header.module';
import { PaginationModule } from '@shared/modules/pagination/pagination.module';
import { DetailsModalModule } from '@shared/modules/details-modal/details-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from '@shared/services/loader.service';
import { LoaderModule } from '@shared/modules/loader/loader.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    AsyncPipe,
    NgbTooltip,
    HeaderModule,
    PaginationModule,
    DetailsModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ]),
    NgIf,
    NgForOf,
    HttpClientModule,
    LoaderModule,
  ],
  providers: [
    MoviesService,
    LoaderService
  ]
})
export class HomeModule { }
