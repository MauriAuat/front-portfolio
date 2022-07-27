import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from 'src/app/modelos/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  proyectoURL: string = 'http://localhost:8080/api/project';
  constructor(private http: HttpClient) {}

  public traerListaProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.proyectoURL + '/mostrar-lista');
  }

  public traerProyectos(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.proyectoURL + `/${id}`);
  }

  public guardarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.proyectoURL + '/nuevo', proyecto);
  }

  public actualizarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.proyectoURL + '/editar', proyecto);
  }

  public borrarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.proyectoURL + `/borrar/${id}`);
  }
}
