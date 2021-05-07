import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './pages/graficos/graficos.component';

const routes: Routes = [
  {path: '', component: GraficosComponent, pathMatch: 'full'},
{path: 'vergrafico', component: GraficosComponent},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
