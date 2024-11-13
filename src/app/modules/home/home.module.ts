import { NgModule } from '@angular/core';

import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { MoviesService } from '@modules/home/services/movies.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@shared/modules/header/header.module';
import { PaginationModule } from '@shared/modules/pagination/pagination.module';
import { DetailsModalModule } from '@shared/modules/details-modal/details-modal.module';
import { UrlInterceptor } from '@modules/home/interceptors/url.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [
    MoviesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
