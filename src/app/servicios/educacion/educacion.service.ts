import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/modelos/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  educacionURL: string = 'https://porfolio-back-end.herokuapp.com/api/edu';

  constructor(private http: HttpClient) {}

  public traerListaEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.educacionURL + '/mostrar-lista');
  }

  public traerEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.educacionURL + `/${id}`);
  }

  public guardarEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.educacionURL + '/nueva', educacion);
  }

  public actualizarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.educacionURL + '/editar', educacion);
  }

  public borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.educacionURL + `/borrar/${id}`);
  }
}
