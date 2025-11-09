import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Empleado, EmpleadoService } from 'src/app/services/empleado';

@Component({
  selector: 'app-crear-empleado',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './crear-empleado.page.html',
  styleUrls: ['./crear-empleado.page.scss'],
})
export class CrearEmpleadoPage implements OnInit {

  constructor(private empleadoService: EmpleadoService, private router:Router) { }

  ngOnInit() {
  }

  empleado: Empleado = {
    id: 0,
    nombreCompleto: '',
    fechaContratacion: new Date().toISOString(),
    cargo: '',
    salario: 0,
    departamento: ''
  };

async guardar(form: NgForm) {
  if (form.valid) {
    this.empleadoService.addEmpleado(this.empleado).subscribe(() => {
      console.log('Empleado creado:', this.empleado);

      // 👇 Navegar solo cuando el backend confirma la creación
      this.router.navigate(['/lista-empleados']);
    });
  }
}


}
