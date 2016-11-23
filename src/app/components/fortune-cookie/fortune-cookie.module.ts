import { DelayedClickDirective } from './cookie/delayed-click.directive';
import { FortuneEffects } from './store/effects/fortune.effects';
import { fortuneListReducer } from './store/reducers/fortune-list.reducer';
import { allReducers } from './store/reducers/index';
import { FortuneActions } from './store/actions/fortuns.actions';
import { FortuneManagerComponent } from './fortune-manager/fortune-manager.component';
import { FortuneManagerModule } from './fortune-manager/fortune-manager.module';
import { FortuneService } from './fortune.service';
//import { fortunesReducer } from './store/reducers/fortune.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieComponent } from './cookie/cookie.component';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    FortuneManagerComponent,
    CookieComponent,
    DelayedClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FortuneManagerModule,
    StoreModule.provideStore(allReducers),
    EffectsModule.run(FortuneEffects)
    //StoreModule.provideStore(fortunesReducer)
  ],
  providers: [
    FortuneService,
    FortuneActions
  ],
  exports:[
    FortuneManagerComponent,
    CookieComponent,
  ]
  // bootstrap: [AppComponent]
})
export class FortuneCookieModule { }
