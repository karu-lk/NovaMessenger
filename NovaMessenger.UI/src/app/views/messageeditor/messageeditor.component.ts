import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { AlexaMessage } from '../messageeditor/alexamessage.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-board',
  templateUrl: './messageeditor.component.html',
  styleUrls: ['./messageeditor.component.scss']
})
export class MessageEditorComponent implements OnInit {
  id: string;
  newMessageForm: FormGroup;
  dynamicContentLoaded: boolean;

  allMessages: AlexaMessage;
  constructor(private router: Router, private route: ActivatedRoute, private _messageService: MessageService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicContentLoaded = true;

    this.route.params.subscribe(params => {
      this.id = params['messageId'];
    });

    this.newMessageForm = this._formBuilder.group({
      messageId: '',
      customerId: '',
      customerDisplayName: '',
      message: '',
      messageStatus: ''
    });

    if (this.id !== "new") {
      this.dynamicContentLoaded = false;
      this._messageService
        .getMessageById(+this.id)
        .subscribe(
        m => {
          this.allMessages = m;
          this.loadFormData(this.allMessages);
        }
        , err => console.log(err)
        , () => {
          this.dynamicContentLoaded = true;
        }
        );
    }
  }

  BackToMessageBoard() {
    this.router.navigate(['views/messageboard']);
  }

  private loadFormData(_selectedMessage: AlexaMessage) {
    this.newMessageForm = this._formBuilder.group({
      messageId: _selectedMessage.messageId,
      customerDisplayName: _selectedMessage.customerDisplayName,
      message: _selectedMessage.message,
      messageStatus: _selectedMessage.messageStatus
    });
  }

  private SubmitMessageForm(_newMessageForm: AlexaMessage) {
    let newMessage = ({
      message_id: +_newMessageForm.messageId,
      customer_display_name: _newMessageForm.customerDisplayName,
      message: _newMessageForm.message,
      message_status: _newMessageForm.messageStatus,
    });

    this._messageService
      .addMessage(newMessage)
      .subscribe(
      m => {
        console.info('Add new completed!');
        this.router.navigate(['views/messageboard']);
      });
  }
}