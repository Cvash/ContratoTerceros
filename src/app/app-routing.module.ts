import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './pages/graficos/graficos.component';

<<<<<<< HEAD
const routes: Routes = [
  {path: '', component: GraficosComponent, pathMatch: 'full'},
{path: 'vergrafico', component: GraficosComponent},
{path: '**', redirectTo: ''}
=======

import { HomeComponent } from './pages/home/home.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '**', redirectTo: '' }
>>>>>>> c19fa0056a6535fbd3ff59b150ab6ca21c129f3e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
