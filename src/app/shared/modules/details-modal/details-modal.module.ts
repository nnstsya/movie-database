import { NgModule } from '@angular/core';

import { AsyncPipe, DatePipe, NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { DetailsModalComponent } from '@shared/modules/details-modal/component/details-modal.component';
import { ModalHeaderComponent } from '@shared/modules/details-modal/component/modal-header/modal-header.component';
import { HeaderModule } from '@shared/modules/header/header.module';

@NgModule({
  declarations: [DetailsModalComponent, ModalHeaderComponent],
    imports: [
        AsyncPipe,
        NgClass,
        NgIf,
        NgSwitchCase,
        NgSwitch,
        HeaderModule,
        DatePipe
    ],
  exports: [DetailsModalComponent],
})
export class DetailsModalModule { }
