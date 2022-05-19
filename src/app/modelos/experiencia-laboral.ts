export class ExperienciaLaboral {
  id_exp: number;
  cargo: string;
  empresa: string;
  logo_empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  id_pers: number;

  constructor(
    id_exp: number,
    cargo: string,
    empresa: string,
    logo_empresa: string,
    fecha_inicio: string,
    fecha_fin: string,
    descripcion: string,
    id_pers: number
  ) {
    this.id_exp = id_exp;
    this.cargo = cargo;
    this.empresa = empresa;
    this.logo_empresa = logo_empresa;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.descripcion = descripcion;
    this.id_pers = id_pers;
  }
}
