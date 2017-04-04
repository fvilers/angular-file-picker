import { NgModule } from '@angular/core';

import { FilePickerDirective } from './file-picker.directive';

@NgModule({
  declarations: [FilePickerDirective],
  exports: [FilePickerDirective]
})
export class FilePickerModule {
}
