import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot( ROUTES, { useHash:true} ),//Se importa el archivo de rutas(app.routing.module)
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
