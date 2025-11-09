import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEmpleadoPage } from './editar-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEmpleadoPageRoutingModule {}
