import { MyfortuneViewComponent } from './components/myfortune-view/myfortune-view.component';
import { CookieComponent } from './components/fortune-cookie/cookie/cookie.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'myfortune', pathMatch: 'full' },
      { path: 'myfortune', component:MyfortuneViewComponent},
    //   { path: 'fortunes', component: FortunesComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }