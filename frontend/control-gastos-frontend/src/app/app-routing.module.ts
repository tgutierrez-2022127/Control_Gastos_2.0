import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'dashboard', 
    loadComponent: () => import('./dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'ingresos',
    loadComponent: () => import('./dashboard/ingresos/ingresos.component').then(m => m.IngresosComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }