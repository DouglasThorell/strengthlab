// Keep all material modules imported and exported in this file

import {
  MdButtonModule,
  MdFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MdDialog,
  MatSnackBarModule,
  MatTabsModule
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
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    MdButtonModule,
    MdFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [MdDialog]
})

export class MaterialModule {
}
