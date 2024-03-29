import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CommonPageComponent } from './common-page/common-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownToggleDirective } from '../app/menu/dropdown-toggle.directive';
import { NestedMenuComponent } from '../app/menu/nested-menu/nested-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    MenuItemComponent,
    CommonPageComponent,
    PageNotFoundComponent,
    DropdownToggleDirective,
    NestedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
