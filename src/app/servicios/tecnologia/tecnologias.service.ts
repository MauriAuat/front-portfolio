import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from 'src/app/modelos/tecnologia';

@Injectable({
  providedIn: 'root',
})
export class TecnologiasService {
  tecnologiaURL: string = 'https://localhost:8080/api/tecno';

  constructor(private http: HttpClient) {}

  public traerListaTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.tecnologiaURL + '/mostrar-lista');
  }

  public traerTecnologia(id: number): Observable<any> {
    return this.http.get<any>(this.tecnologiaURL + `/${id}`);
  }

  public guardarTecnologia(tecnologia: Tecnologia): Observable<any> {
    return this.http.post<any>(this.tecnologiaURL + '/nueva', tecnologia);
  }

  public actualizarTecnologia(tecnologia: Tecnologia): Observable<any> {
    return this.http.put<any>(this.tecnologiaURL + '/editar', tecnologia);
  }

  public borrarTecnologia(id: number): Observable<any> {
    return this.http.delete(this.tecnologiaURL + `/borrar/${id}`);
  }
}
