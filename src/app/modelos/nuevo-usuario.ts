export class NuevoUsuario {
  nombre: string;
  nombreusuario: string;
  email: string;
  password: string;
  authorities: string[];

  constructor(
    nombre: string,
    nombreusuario: string,
    email: string,
    password: string,
    authorities: string[]
  ) {
    this.nombre = nombre;
    this.nombreusuario = nombreusuario;
    this.email = email;
    this.password = password;
    this.authorities = authorities;
  }
}
