import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AlexaMessage } from '../views/messageEditor/alexamessage.interface';

@Injectable()
export class MessageService {
    private baseUrl: string = 'https://xocsild04e.execute-api.eu-west-1.amazonaws.com/prod';

    constructor(private http: Http) {
    }

    public getMessageById(_messageId: number): Observable<AlexaMessage> {
        var aMessage;
        let _message$;

        var args: RequestOptionsArgs;

        _message$ = this.http
            .get(`${this.baseUrl}/messages`, { url: `${this.baseUrl}/messages`, method: 'get', params: { "messageId": _messageId }, headers: this.getHeaders() })
            .map(mapSingleMessage)
            .catch(this.handleError);

        return _message$;
    }

    public getAllMessages(): Observable<AlexaMessage[]> {
        let _message$;

        _message$ = this.http
            .get(`${this.baseUrl}/messages`, { headers: this.getHeaders() })
            .map(mapMessage)
            .catch(this.handleError);

        return _message$;
    }

    public addMessage(body: Object): Observable<AlexaMessage[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.baseUrl}/messages`, bodyString, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
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

function mapSingleMessage(response: any): AlexaMessage {
    let message = <AlexaMessage>({
        messageId: response.json().Item.message_id,
        customerDisplayName: response.json().Item.customer_display_name,
        message: response.json().Item.message,
        messageStatus: response.json().Item.message_status
    });
    return message;
}

function toAlexaMessage(r: any): AlexaMessage {
    let message = <AlexaMessage>({
        messageId: r.message_id,
        customerId: r.customer_id,
        customerDisplayName: r.customer_display_name,
        message: r.message,
        messageStatus: r.message_status
    });
    return message;
}