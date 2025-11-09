import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEmpleadoPage } from './editar-empleado.page';

describe('EditarEmpleadoPage', () => {
  let component: EditarEmpleadoPage;
  let fixture: ComponentFixture<EditarEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
