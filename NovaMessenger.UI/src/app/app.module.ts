import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as $ from 'jquery';

import { AppComponent } from './app.component';

import { routes } from './app.router';

import { ViewsModule } from './views/views.module';
import { NgaModule } from './theme/nga.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ViewsModule,
    NgaModule.forRoot(),
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
