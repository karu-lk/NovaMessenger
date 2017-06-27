import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AlexaMessage } from './alexamessage.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-board',
  templateUrl: './messageeditor.component.html',
  styleUrls: ['./messageeditor.component.scss']
})
export class MessageEditorComponent implements OnInit, OnDestroy {
  private messageDirtyStatus: string;
  @Input() messageId: string;
  private sub: any;
  id: string;
  selectedMessage: any;

  newMessage: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private _messageService: MessageService) { }

  ngOnInit() {
    this.InitiateForm();
  }

  SubmitMessageForm({ value, valid }: { value: AlexaMessage, valid: boolean }) {
    console.log(value, valid);
    if (this.id === 'new') {
      //add new record
    }
    else {
      //update the selected
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  InitiateForm() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['messageId'];
    });

    if (this.id !== 'new') {
      //this.selectedMessage = this._messageService.getMessageById(+this.id);

      this._messageService
        .getMessageById(+this.id)
        .subscribe(m => this.newMessage = m
        , err => console.error(err));

      //console.log('message editor new message: ' + this.newMessage);

      this.newMessage = new FormGroup({
        messageId: new FormControl(this.selectedMessage.messageId),
        customerDisplayName: new FormControl(this.selectedMessage.customerDisplayName),
        message: new FormControl(this.selectedMessage.message),
        messageStatus: new FormControl(this.selectedMessage.messageStatus)
      });
    }
    else {
      this.messageDirtyStatus = 'new-record';
      this.newMessage = new FormGroup({
        messageId: new FormControl(''),
        customerDisplayName: new FormControl(''),
        message: new FormControl(''),
        messageStatus: new FormControl('')
      });
    }
  }

  BackToMessageBoard() {
    this.router.navigate(['views/messageboard']);
  }
}
