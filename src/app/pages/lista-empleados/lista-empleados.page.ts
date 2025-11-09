import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Empleado, EmpleadoService } from 'src/app/services/empleado';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './lista-empleados.page.html',
  styleUrls: ['./lista-empleados.page.scss'],
})
export class ListaEmpleadosPage implements OnInit {
  empleados: Empleado[] = [];
  searchTerm: string = '';

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit() {
    this.loadEmpleados();
  }

  irACrearEmpleado() {
    this.router.navigate(['/crear-empleado']);
  }

  ionViewWillEnter() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  limpiarBusqueda() {
    this.searchTerm = '';
    this.cargarEmpleados(); // vuelve a cargar todos los empleados
  }


  loadEmpleados() {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  buscar() {
    if (this.searchTerm.trim() === '') {
      this.loadEmpleados();
    } else {
      this.empleadoService.searchEmpleados(this.searchTerm).subscribe(data => {
        this.empleados = data;
      });
    }
  }

  irAEditarEmpleado(id: number) {
    this.router.navigate(['/editar-empleado', id]);
  }

  eliminar(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe(() => {
      this.loadEmpleados();
    });
  }
}
