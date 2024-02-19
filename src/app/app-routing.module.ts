import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingService } from './routing.service';

let routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: ROUTES,
    useFactory: (routingService: RoutingService): Routes => {
      return [...routingService.getRoutes(), {path: '**', component: PageNotFoundComponent}];
    },
    deps: [RoutingService],
    multi:true
  }]
})
export class AppRoutingModule {}