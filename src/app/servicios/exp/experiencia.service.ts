import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/modelos/experiencia-laboral';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  experienciasURL: string = 'https://porfolio-back-end.herokuapp.com/api/exp';

  constructor(private http: HttpClient) {}

  public traerListaExperiencia(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(
      this.experienciasURL + '/mostrar-lista'
    );
  }

  public traerExperiencia(id: number): Observable<ExperienciaLaboral> {
    return this.http.get<ExperienciaLaboral>(this.experienciasURL + `/${id}`);
  }

  public guardarExperiencia(experiencia: ExperienciaLaboral): Observable<any> {
    return this.http.post<any>(this.experienciasURL + '/nueva', experiencia);
  }

  public actualizarExperiencia(
    experiencia: ExperienciaLaboral
  ): Observable<any> {
    return this.http.put<any>(this.experienciasURL + '/editar', experiencia);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.experienciasURL + `/borrar/${id}`);
  }
}
