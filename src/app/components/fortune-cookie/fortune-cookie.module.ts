import { FortuneComponent } from './fortune/fortune.component';
import { FortuneModule } from './fortune/fortune.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieComponent } from './cookie/cookie.component';


@NgModule({
  declarations: [
    FortuneComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FortuneModule
  ],
  providers: [],
  exports:[
    FortuneComponent
    
  ]
  // bootstrap: [AppComponent]
})
export class FortuneCookieModule { }
