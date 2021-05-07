import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';




import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { ListasGestoresComponent } from './pages/listas-gestores/listas-gestores.component';
import { EnviarPorCorreoComponent } from './pages/enviar-por-correo/enviar-por-correo.component';
import { VerGestoresComponent } from './pages/ver-gestores/ver-gestores.component';
import { VerBaseHistoricaComponent } from './pages/ver-base-historica/ver-base-historica.component';
import { ConfiguracionPeriodoComponent } from './pages/configuracion-periodo/configuracion-periodo.component';
import { DescargarComponent } from './pages/descargar/descargar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficosComponent,
    ListasGestoresComponent,
    EnviarPorCorreoComponent,
    VerGestoresComponent,
    VerBaseHistoricaComponent,
    ConfiguracionPeriodoComponent,
    DescargarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule { };
