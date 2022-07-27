import { Persona } from './persona';

export class ExperienciaLaboral {
  id_exp: number;
  cargo: string;
  empresa: string;
  logo_Empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  persona: Persona;

  constructor(
    id_exp: number,
    cargo: string,
    empresa: string,
    logo_Empresa: string,
    fecha_inicio: string,
    fecha_fin: string,
    descripcion: string,
    persona: Persona
  ) {
    this.id_exp = id_exp;
    this.cargo = cargo;
    this.empresa = empresa;
    this.logo_Empresa = logo_Empresa;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.descripcion = descripcion;
    this.persona = persona;
  }
}
