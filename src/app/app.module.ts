import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BannerInicioComponent } from './Components/banner-inicio/banner-inicio.component';
import { AcercaDeMiComponent } from './Components/acerca-de-mi/acerca-de-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerInicioComponent,
    AcercaDeMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
