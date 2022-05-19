export class Domicilio {
  id: number;
  direccion: string;
  id_pers: number;

  constructor(id: number, direccion: string, id_pers: number) {
    this.id = id;
    this.direccion = direccion;
    this.id_pers = id_pers;
  }
}
