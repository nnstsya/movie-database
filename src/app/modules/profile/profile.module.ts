import { NgModule } from '@angular/core';

import { ProfilePageComponent } from '@modules/profile/pages/profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePageComponent
      }
    ]),
    NgForOf,
    NgIf,
  ],
  providers: []
})
export class ProfileModule { }
