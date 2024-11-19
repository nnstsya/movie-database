import { NgModule } from '@angular/core';

import { FavoritePageComponent } from '@modules/favorite/pages/favorite-page/favorite-page.component';
import { RouterModule } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    FavoritePageComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FavoritePageComponent
      }
    ]),
    NgForOf,
    NgIf,
  ]
})
export class FavoriteModule { }
