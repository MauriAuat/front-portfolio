export class Persona {
  id_pers: number;
  nombre: string;
  apellido: string;
  titulo: string;
  resumen: string;
  foto: string;
  bannerPersonal: string;

  constructor(
    id_pers: number,
    nombre: string,
    apellido: string,
    titulo: string,
    resumen: string,
    foto: string,
    bannerPersonal: string
  ) {
    this.id_pers = id_pers;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.resumen = resumen;
    this.foto = foto;
    this.bannerPersonal = bannerPersonal;
  }
}