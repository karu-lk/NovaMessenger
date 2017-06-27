import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { MessageBoardComponent } from './messageboard.component';
import { routing } from './messageboard.routing';
import { MessageService } from '../../services/message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    MessageBoardComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageBoardModule { }
