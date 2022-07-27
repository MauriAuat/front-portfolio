import { Persona } from './persona';

export class Domicilio {
  id: number;
  direccion: string;
  persona: Persona;

  constructor(id: number, direccion: string, persona: Persona) {
    this.id = id;
    this.direccion = direccion;
    this.persona = persona;
  }
}
