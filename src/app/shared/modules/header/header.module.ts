import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@shared/modules/header/component/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterLink],
  exports: [HeaderComponent],
})
export class HeaderModule { }
