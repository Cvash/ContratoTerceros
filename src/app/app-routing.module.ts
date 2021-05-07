import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionPeriodoComponent } from './pages/configuracion-periodo/configuracion-periodo.component';
import { DescargarComponent } from './pages/descargar/descargar.component';
import { EnviarPorCorreoComponent } from './pages/enviar-por-correo/enviar-por-correo.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListasGestoresComponent } from './pages/listas-gestores/listas-gestores.component';
import { VerBaseHistoricaComponent } from './pages/ver-base-historica/ver-base-historica.component';
import { VerGestoresComponent } from './pages/ver-gestores/ver-gestores.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: 'enviarPorCorreo', component: EnviarPorCorreoComponent},
  { path: 'verBaseHistorica', component: VerBaseHistoricaComponent },
  { path: 'verGestores', component: VerGestoresComponent },
  { path: 'configuracionPeriodo', component: ConfiguracionPeriodoComponent },
  { path: 'descargas', component: DescargarComponent },
  { path: 'listarGestores', component: ListasGestoresComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
