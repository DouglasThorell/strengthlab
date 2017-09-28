// Keep all material modules imported and exported in this file

import {
  MdButtonModule, MdFormFieldModule, MatInputModule, MatListModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
})

export class MaterialModule {
}
