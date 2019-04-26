import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { StoreModule } from '@ngrx/store';

import { authReducer } from './ngrx/reducers/auth.reduce';
import { counterReducer } from './ngrx/reducers/count.reducer';


// for chrome redux dev
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { CountPlaygroundComponent } from './count-playground/count-playground.component';
import { AuthPlaygroundComponent } from './auth-playground/auth-playground.component';





@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    GreenComponent,
    CountPlaygroundComponent,
    AuthPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, auth: authReducer }), 
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
