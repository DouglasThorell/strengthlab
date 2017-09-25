// Keep all material modules imported and exported in this file

import {
  MdButtonModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule
  ],
  exports: [
    MdButtonModule
  ],
})

export class MaterialModule {
}
