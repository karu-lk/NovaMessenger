import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
  ]
})
export class LoginModule { }
