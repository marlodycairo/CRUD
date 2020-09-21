import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EmpleadoTarjetaComponent } from './components/empleado-tarjeta/empleado-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadoComponent,
    NavbarComponent,
    EmpleadoFormComponent,
    EmpleadoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
