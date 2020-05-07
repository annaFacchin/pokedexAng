import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { PokedexComponent } from './pokedex/pokedex.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesNavigatorComponent } from './pages-navigator/pages-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ModalComponent,
    NavbarComponent,
    PagesNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
