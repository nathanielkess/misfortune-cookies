import { EditFortuneComponent } from './edit-fortune/edit-fortune.component';
import { ListFortunesComponent } from './list-fortunes/list-fortunes.component';
import { FortuneComponent } from './fortune.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', component:FortuneComponent, children:[
          { path:'manage', component:ListFortunesComponent },
          // { path:'edit/:id', component:EditFortuneComponent }
      ]},
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class FortuneRoutingModule { }