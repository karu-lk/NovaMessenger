import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { MenuService } from '../theme';
import { PAGES_MENU } from './views.menu';

@Component({
  selector: 'views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class Views {
  constructor(private _menuService: MenuService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
