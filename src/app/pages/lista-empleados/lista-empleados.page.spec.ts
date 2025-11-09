import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEmpleadosPage } from './lista-empleados.page';

describe('ListaEmpleadosPage', () => {
  let component: ListaEmpleadosPage;
  let fixture: ComponentFixture<ListaEmpleadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
