import { Injectable } from '@angular/core';
import { CommonPageComponent } from './common-page/common-page.component';
import { IMenuItem } from '../app/shared/interfaces';
import { SubPageComponent } from './sub-page/sub-page.component';
import config from '../assets/appConfig.json';
import { Routes, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RoutingService  {
  getChildren(item: IMenuItem) {
    const tempArray: Routes = [
      {path: '', component: CommonPageComponent},
    ];
    if (item.children.length > 0) {
      for (const child of item.children) {
        tempArray.push({path: child.route, component: SubPageComponent, data: {title: child.title}});
      }
    }
    return tempArray;
  }

  routes: Routes = [];
  getRoutes = () => {
    for (const item of config.menuItems) {
      const tempRoute: Route = {
        path: item.route,
        data: {title: item.title},
        children: this.getChildren(item),
        title: item.title
      }

      if (item.children.length === 0) {
        tempRoute.component = CommonPageComponent;
      }
      this.routes.push(tempRoute);
    }
     return this.routes;
  }
  constructor() {}
}
