import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEmpleadoPageRoutingModule } from './editar-empleado-routing.module';

import { EditarEmpleadoPage } from './editar-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEmpleadoPage,
    EditarEmpleadoPageRoutingModule
  ],
  declarations: []
})
export class EditarEmpleadoPageModule {}
