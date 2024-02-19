import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../shared/interfaces';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item: IMenuItem;

  hasChildren = (item: IMenuItem): boolean => {
    return item.children.length > 0;
  }
}
