import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioURL: string = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  public traerListaUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioURL + '/mostrar-lista');
  }

  public traerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL + `/${id}`);
  }

  public guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.usuarioURL + '/nuevo', usuario);
  }

  public actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<any>(this.usuarioURL + '/editar', usuario);
  }

  public borrarUsuario(id: number): Observable<any> {
    return this.http.delete(this.usuarioURL + `/borrar/${id}`);
  }
}
