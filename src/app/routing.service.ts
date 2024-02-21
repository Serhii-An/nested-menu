import { Injectable } from '@angular/core';
import { CommonPageComponent } from './common-page/common-page.component';
import { IMenuItem } from '../app/shared/interfaces';
import { Routes, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RoutingService  {
  getRoutes = (menuItems: Array<IMenuItem>, isChild: boolean = false) => {
    const routes: Routes = [];

    for (const item of menuItems) {
      const tempRoute: Route = {
        path: item.route,
        data: {title: item.title},
        title: item.title
      }

      if (item.children.length) {
        tempRoute.children = [{path: '', component: CommonPageComponent}, ...this.getRoutes(item.children)];
      }

      if (item.children.length === 0) {
        tempRoute.component = CommonPageComponent;
      } 

      routes.push(tempRoute);
    }
    return routes;
  }
  constructor() {}
}
