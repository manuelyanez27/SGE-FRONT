import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Empleado {
  id: number;
  nombreCompleto: string;
  fechaContratacion: string;
  cargo: string;
  salario: number;
  departamento: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = environment.apiUrl;
  public apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'X-Api-Key': this.apiKey
      })
    };
  }

  getEmpleado(id: number): Observable<Empleado> {
    // 👇 invoca getHeaders() correctamente
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`, this.getHeaders());
  }


  getEmpleados(): Observable<Empleado[]> {
    // 👇 invoca getHeaders() correctamente
    return this.http.get<Empleado[]>(this.apiUrl, this.getHeaders());
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado, this.getHeaders());
  }

  updateEmpleado(empleado: Empleado): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${empleado.id}`, empleado, this.getHeaders());
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  searchEmpleados(term: string): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.apiUrl}/search/?value=${term}`, this.getHeaders());
  }
}
