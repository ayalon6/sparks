import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { ScreenComponent } from './screen/screen.component';
import { PadComponent } from './pad/pad.component';
import { StoreModule } from '@ngrx/store';
import { numPadReducer } from './store/reducer';


@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    ScreenComponent,
    PadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ numPad: numPadReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
