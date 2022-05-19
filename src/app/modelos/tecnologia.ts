export class Tecnologia {
  id_tecno: number;
  nombre_tecno: string;
  id_pers: number;

  constructor(id_tecno: number, nombre_tecno: string, id_pers: number) {
    this.id_tecno = id_tecno;
    this.nombre_tecno = nombre_tecno;
    this.id_pers = id_pers;
  }
}
