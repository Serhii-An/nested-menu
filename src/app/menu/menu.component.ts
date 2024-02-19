import { Component } from '@angular/core';
import { IMenuItem } from './../shared/interfaces';
import config from '../../assets/appConfig.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(){}
  menuItems: Array<IMenuItem> = config.menuItems;
}
