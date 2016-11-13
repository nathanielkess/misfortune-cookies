import { FortuneService } from './fortune.service';
import { fortunesReducer } from './store/reducers/fortune.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
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
    FortuneModule,
    RouterModule,
    StoreModule.provideStore(fortunesReducer)
  ],
  providers: [
    FortuneService,
  ],
  exports:[
    FortuneComponent,
    CookieComponent
  ]
  // bootstrap: [AppComponent]
})
export class FortuneCookieModule { }
