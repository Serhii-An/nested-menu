import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../shared/interfaces';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})

export class NestedMenuComponent {
  @Input() menuItems: Array<IMenuItem>;
  @Input() parentRoute: string = ""
}