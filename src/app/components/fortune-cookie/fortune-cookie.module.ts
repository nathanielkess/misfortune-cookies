import { FortuneManagerComponent } from './fortune-manager/fortune-manager.component';
import { FortuneManagerModule } from './fortune-manager/fortune-manager.module';
import { FortuneService } from './fortune.service';
import { fortunesReducer } from './store/reducers/fortune.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieComponent } from './cookie/cookie.component';


@NgModule({
  declarations: [
    FortuneManagerComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FortuneManagerModule,
    RouterModule,
    StoreModule.provideStore(fortunesReducer)
  ],
  providers: [
    FortuneService,
  ],
  exports:[
    FortuneManagerComponent,
    CookieComponent
  ]
  // bootstrap: [AppComponent]
})
export class FortuneCookieModule { }
