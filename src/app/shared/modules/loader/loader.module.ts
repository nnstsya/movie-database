import { NgModule } from '@angular/core';

import { LoaderComponent } from '@shared/modules/loader/component/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class LoaderModule { }
