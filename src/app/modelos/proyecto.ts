export class Proyecto {
  id_proyecto: number;
  nombre_proyecto: string;
  fecha_activo: string;
  descripcion: string;
  link_proyecto: string;
  imagen_muestra: string;

  constructor(
    id_proyecto: number,
    nombre_proyecto: string,
    fecha_activo: string,
    descripcion: string,
    link_proyecto: string,
    imagen_muestra: string
  ) {
    this.id_proyecto = id_proyecto;
    this.nombre_proyecto = nombre_proyecto;
    this.fecha_activo = fecha_activo;
    this.descripcion = descripcion;
    this.link_proyecto = link_proyecto;
    this.imagen_muestra = imagen_muestra;
  }
}
