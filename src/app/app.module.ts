import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabinaComponent } from './cabina/cabina.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabinaComponent,
    ContactoComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
