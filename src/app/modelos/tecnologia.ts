import { Persona } from './persona';

export class Tecnologia {
  id_tecno: number;
  nombre_tecno: string;
  nivel: number;
  persona: Persona;

  constructor(
    id_tecno: number,
    nombre_tecno: string,
    nivel: number,
    persona: Persona
  ) {
    this.id_tecno = id_tecno;
    this.nombre_tecno = nombre_tecno;
    this.nivel = nivel;
    this.persona = persona;
  }
}
