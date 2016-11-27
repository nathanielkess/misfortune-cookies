import { RouterModule } from '@angular/router';
import { FortuneRoutingModule } from './fortune-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddFortuneComponent } from './add-fortune/add-fortune.component';
import { EditFortuneComponent } from './edit-fortune/edit-fortune.component';
import { ListFortunesComponent } from './list-fortunes/list-fortunes.component';
import { ViewFortuneDetailsComponent } from './view-fortune-details/view-fortune-details.component';
import { ViewManageFortunesComponent } from './view-manage-fortunes/view-manage-fortunes.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AddFortuneComponent,
    EditFortuneComponent,
    ListFortunesComponent,
    ViewFortuneDetailsComponent,
    ViewManageFortunesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FortuneRoutingModule,
    // RouterModule
  ],
  providers: [],
  exports:[
    AddFortuneComponent,
    EditFortuneComponent,
    ListFortunesComponent,
  ]
  // bootstrap: [AppComponent]
})
export class FortuneManagerModule { }
