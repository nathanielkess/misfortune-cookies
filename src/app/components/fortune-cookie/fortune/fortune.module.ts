import { RouterModule } from '@angular/router';
import { FortuneRoutingModule } from './fortune-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddFortuneComponent } from './add-fortune/add-fortune.component';
import { EditFortuneComponent } from './edit-fortune/edit-fortune.component';
import { ListFortunesComponent } from './list-fortunes/list-fortunes.component';


@NgModule({
  declarations: [
    AddFortuneComponent,
    EditFortuneComponent,
    ListFortunesComponent,
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
export class FortuneModule { }
