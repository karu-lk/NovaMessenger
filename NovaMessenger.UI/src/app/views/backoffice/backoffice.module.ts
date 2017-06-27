import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Backoffice } from './backoffice.component';
import { routing } from './backoffice.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Backoffice
  ],
  providers: [
  ]
})
export class BackofficeModule { }
