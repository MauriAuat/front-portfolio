export class Educacion {
  id_edu: number;
  fecha_egreso: string;
  fecha_ingreso: string;
  logo_inst: string;
  nombre_inst: string;
  titulo: string;
  id_pers: number;

  constructor(
    id_edu: number,
    fecha_egreso: string,
    fecha_ingreso: string,
    logo_inst: string,
    nombre_inst: string,
    titulo: string,
    id_pers: number
  ) {
    this.id_edu = id_edu;
    this.fecha_egreso = fecha_egreso;
    this.fecha_ingreso = fecha_ingreso;
    this.logo_inst = logo_inst;
    this.nombre_inst = nombre_inst;
    this.titulo = titulo;
    this.id_pers = id_pers;
  }
}
