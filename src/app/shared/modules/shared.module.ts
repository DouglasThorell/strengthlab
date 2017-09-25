// All app-wide modules

import {MaterialModule} from './material.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})

export class SharedModule {}
