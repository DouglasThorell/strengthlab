// Keep all material modules imported and exported in this file

import {
  MdButtonModule, MdFormFieldModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
})

export class MaterialModule {
}
