import { NgModule } from '@angular/core';

import { ProfilePageComponent } from '@modules/profile/pages/profile-page/profile-page.component';
import { RouterModule } from '@angular/router';

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
  ],
  providers: []
})
export class ProfileModule { }
