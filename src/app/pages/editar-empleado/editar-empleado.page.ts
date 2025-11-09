import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Empleado, EmpleadoService } from 'src/app/services/empleado';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './editar-empleado.page.html',
  styleUrls: ['./editar-empleado.page.scss'],
})
export class EditarEmpleadoPage implements OnInit {
  empleado: Empleado = {
    id: 0,
    nombreCompleto: '',
    fechaContratacion: '',
    cargo: '',
    salario: 0,
    departamento: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empleadoService.getEmpleado(id).subscribe(data => {
      this.empleado = data;
    });
  }

  async guardar(form: NgForm) {
    if (form.valid) {
      await this.empleadoService.updateEmpleado(this.empleado).subscribe(() => {
        this.router.navigate(['/lista-empleados']); // redirige a la lista
      });
    }
  }

}
