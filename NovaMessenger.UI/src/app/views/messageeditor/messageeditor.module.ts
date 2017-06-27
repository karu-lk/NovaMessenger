import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { MessageEditorComponent } from './messageeditor.component';
import { routing } from './messageeditor.routing';
import { MessageService } from '../../services/message.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    MessageEditorComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageEditorModule { }
