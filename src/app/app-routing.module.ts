import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-empleados',
    pathMatch: 'full'
  }
  ,
  {
    path: 'lista-empleados',
    loadChildren: () => import('./pages/lista-empleados/lista-empleados.module')
      .then(m => m.ListaEmpleadosPageModule)
  },
  {
    path: 'crear-empleado',
    loadChildren: () => import('./pages/crear-empleado/crear-empleado.module')
      .then(m => m.CrearEmpleadoPageModule)
  },
  {
    path: 'editar-empleado/:id',
    loadChildren: () => import('./pages/editar-empleado/editar-empleado.module')
      .then(m => m.EditarEmpleadoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
