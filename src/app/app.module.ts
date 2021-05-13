import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';




import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

import { ListasGestoresComponent } from './pages/listas-gestores/listas-gestores.component';
import { VerGestoresComponent } from './pages/ver-gestores/ver-gestores.component';
import { VerBaseHistoricaComponent } from './pages/ver-base-historica/ver-base-historica.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TrasferenciaContratosComponent } from './pages/popups/trasferencia-contratos/trasferencia-contratos.component';
import { EjemploComponent } from './pages/popups/ejemplo/ejemplo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartConfiguration, ChartDataSets, ChartOptions, ChartPoint, ChartType, PluginServiceGlobalRegistration, PluginServiceRegistrationOptions } from 'chart.js';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficosComponent,
    ListasGestoresComponent,
    VerGestoresComponent,
    VerBaseHistoricaComponent,
    FormularioComponent,
    TrasferenciaContratosComponent,
    EjemploComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule { };
