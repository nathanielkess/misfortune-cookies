import { ViewFortuneDetailsComponent } from './view-fortune-details/view-fortune-details.component';
import { ViewManageFortunesComponent } from './view-manage-fortunes/view-manage-fortunes.component';
import { FortuneManagerComponent } from './fortune-manager.component';
import { ListFortunesComponent } from './list-fortunes/list-fortunes.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', component:FortuneManagerComponent, children:[
          { path:'manage', component:ViewManageFortunesComponent },
          { path:'details/:id', component:ViewFortuneDetailsComponent }
      ]},
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class FortuneRoutingModule { }