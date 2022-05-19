export class Usuario {
  id_user: number;
  nombre: string;
  apellido: string;
  email: string;
  user_name: string;
  password: string;

  constructor(
    id_user: number,
    nombre: string,
    apellido: string,
    email: string,
    user_name: string,
    password: string
  ) {
    this.id_user = id_user;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.user_name = user_name;
    this.password = password;
  }
}
