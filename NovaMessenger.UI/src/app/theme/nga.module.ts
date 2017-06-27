import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MenuItem,
  SideMenuComponent,
  NavComponent,
  SidebarComponent
} from './components';

import {
  MenuService,
} from './themeServices';

const NGA_COMPONENTS = [
  
  MenuItem,
  SideMenuComponent,
  NavComponent,
  SidebarComponent
];

const NGA_SERVICES = [
  MenuService
];

@NgModule({
  declarations: [
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        ...NGA_SERVICES
      ],
    };
  }
}
