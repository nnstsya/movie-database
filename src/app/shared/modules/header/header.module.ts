import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@shared/modules/header/component/header.component';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterLink, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbDropdownItem],
  exports: [HeaderComponent],
})
export class HeaderModule { }
