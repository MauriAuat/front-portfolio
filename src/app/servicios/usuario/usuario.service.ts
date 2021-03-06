import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioURL: string = 'https://porfolio-back-end.herokuapp.com/api/usuario';

  constructor(private http: HttpClient, private cookies: CookieService) {}

  public traerListaUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioURL + '/mostrar-lista');
  }

  public traerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL + `/${id}`);
  }

  public guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.usuarioURL + '/nuevo', usuario);
  }

  public login(usuario: any): Observable<any> {
    return this.http.post<any>(this.usuarioURL + '/login', usuario);
  }

  public actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<any>(this.usuarioURL + '/editar', usuario);
  }

  public borrarUsuario(id: number): Observable<any> {
    return this.http.delete(this.usuarioURL + `/borrar/${id}`);
  }

  setToken(token: string) {
    return this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
  deleteToken() {
    this.cookies.delete('token');
  }
  getLoggedUser() {
    const token = this.getToken();
    return token;
  }
}
