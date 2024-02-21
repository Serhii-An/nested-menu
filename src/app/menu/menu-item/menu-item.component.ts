import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IMenuItem } from '../../shared/interfaces';
import config from '../../../assets/appConfig.json';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  @Input() item: IMenuItem;
  @Input() parentRoute: string = "";
  currentRoute: string = "";

  hasChildren = (item: IMenuItem): boolean => {
    return item.children.length > 0;
  }

  onHover(event: Event): void {
    const subMenu = event.target as HTMLElement;
    if (!this.containsClassName(subMenu)) {
      return;
    }
    
    this.renderer.setStyle(subMenu.querySelector('.dropdown-menu'), 'display', 'block');
    if (window.innerWidth < config.minDesktopWidth) {
      this.renderer.setStyle(subMenu.querySelector('.dropdown-menu'), 'position', 'static');
    }
  }


  onBlur(event: Event): void {
    const subMenu = event.target as HTMLElement;
    if (!this.containsClassName(subMenu)) {
      return;
    }
   
    this.renderer.removeStyle(subMenu.querySelector('.dropdown-menu'), 'display');
  }


  containsClassName(subMenu: HTMLElement): boolean {
    return subMenu.classList.contains('dropdown') ? true : false;
  }


  ngOnInit() {
    this.currentRoute = `${this.parentRoute}/${this.item.route}`;
  }
}
