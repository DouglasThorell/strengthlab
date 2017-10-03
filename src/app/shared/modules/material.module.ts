// Keep all material modules imported and exported in this file

import {
  MdButtonModule,
  MdFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule, MdDialog
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [MdDialog]
})

export class MaterialModule {
}
