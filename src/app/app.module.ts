import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KegsComponent } from './kegs/kegs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewBeerComponent } from './new-beer/new-beer.component';


@NgModule({
  declarations: [
    AppComponent,
    KegsComponent,
    NavBarComponent,
    NewBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
