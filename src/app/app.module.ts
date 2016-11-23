import { AppRoutingModule } from './app-routing.module';
import { FortuneCookieModule } from './components/fortune-cookie/fortune-cookie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyfortuneViewComponent } from './components/myfortune-view/myfortune-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfortuneViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FortuneCookieModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
