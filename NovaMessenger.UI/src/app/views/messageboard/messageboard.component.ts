import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlexaMessage } from '../messageeditor/alexamessage.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-board',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.scss']
})
export class MessageBoardComponent implements OnInit {
  allMessages: AlexaMessage[] = [];
  constructor(private router: Router, private _messageService: MessageService) { }

  ngOnInit() {
    this._messageService
      .getAllMessages()
      .subscribe(m => this.allMessages = m
      , err => console.error(err));
  }


  loadEditor(item) {
    if (item !== null) {
      this.router.navigate(['views/messageeditor', item.messageId]);
    }
    else {
      this.router.navigate(['views/messageeditor', 'new']);
    }
  }
}
