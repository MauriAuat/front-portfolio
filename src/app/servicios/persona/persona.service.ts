import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  personaURL: string = 'http://localhost:8080/api/persona';

  constructor(private httpClient: HttpClient) {}

  public traerListaPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + '/mostrar-lista');
  }

  public traerPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `/${id}`);
  }

  public guardarPersona(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + '/nueva', persona);
  }
  public actualizarPersona(persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + '/editar', persona);
  }
  public borrarPersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `/borrar/${id}`);
  }
}
