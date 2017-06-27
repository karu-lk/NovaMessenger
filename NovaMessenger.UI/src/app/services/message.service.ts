import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AlexaMessage } from '../views/messageEditor/alexamessage.interface';

@Injectable()
export class MessageService {
    private baseUrl: string = 'https://xocsild04e.execute-api.eu-west-1.amazonaws.com/prod';

    constructor(private http: Http) {
    }

    public getMessageById(_messageId: number): any {
        var aMessage;
        let _message$;

        _message$ = this.http
            .get(`${this.baseUrl}/messages`, { url: '', method: '', params: { "messageId": _messageId }, headers: this.getHeaders() })
            .map(mapSingleMessage)
            .subscribe(
                data=>aMessage=data,
                err=>console.log(err)
            );

        return _message$;
    }

    public getAllMessages(): Observable<AlexaMessage[]> {
        let _message$;

        _message$ = this.http
            .get(`${this.baseUrl}/messages`, { headers: this.getHeaders() })
            .map(mapMessage)

        return _message$;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapMessage(response: Response): AlexaMessage[] {
    return response.json().Items.map(toAlexaMessage);
}

function mapSingleMessage(response: Response): AlexaMessage[] {
    let message: AlexaMessage;
    return message = response.json().Item;
}

function toAlexaMessage(r: any): AlexaMessage {
    console.log('r is: ' + r.message);
    let message = <AlexaMessage>({
        messageId: r.message_id,
        customerId: r.customer_id,
        customerDisplayName: r.customer_display_name,
        message: r.message,
        messageStatus: r.message_status
    });
    return message;
}
