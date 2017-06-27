import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Views } from './views.component';
import { routing } from './views.routing';
// import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [Views]//, HomeComponent]
})

export class ViewsModule {

}
