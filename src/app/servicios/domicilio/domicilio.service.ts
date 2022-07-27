import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domicilio } from 'src/app/modelos/domicilio';

@Injectable({
  providedIn: 'root',
})
export class DomicilioService {
  domicilioURL: string = 'https://porfolio-back-end.herokuapp.com/api/dom';

  constructor(private http: HttpClient) {}

  public traerListaDomicilios(): Observable<Domicilio[]> {
    return this.http.get<Domicilio[]>(this.domicilioURL + '/mostrar-lista');
  }

  public traerDomicilio(id: number): Observable<Domicilio> {
    return this.http.get<Domicilio>(this.domicilioURL + `/${id}`);
  }

  public guardarDomicilio(domicilio: Domicilio): Observable<any> {
    return this.http.post<any>(this.domicilioURL + '/nuevo', domicilio);
  }

  public actualizarDomicilio(domicilio: Domicilio): Observable<any> {
    return this.http.put<any>(this.domicilioURL + '/editar', domicilio);
  }

  public borrarDomicilio(id: number): Observable<any> {
    return this.http.delete<any>(this.domicilioURL + `/borrar/${id}`);
  }
}
