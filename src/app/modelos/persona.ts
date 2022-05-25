import { Domicilio } from './domicilio';
import { Educacion } from './educacion';
import { ExperienciaLaboral } from './experiencia-laboral';
import { Proyecto } from './proyecto';
import { Tecnologia } from './tecnologia';

export class Persona {
  id_pers: number;
  nombre: string;
  apellido: string;
  titulo: string;
  resumen: string;
  foto: string;
  bannerPersonal: string;
  redSocial1: string;
  redSocial2: string;
  doms: Domicilio[];
  edus: Educacion[];
  exp_laboral: ExperienciaLaboral[];
  proyectos: Proyecto[];
  tecnologias: Tecnologia[];

  constructor(
    id_pers: number,
    nombre: string,
    apellido: string,
    titulo: string,
    resumen: string,
    foto: string,
    bannerPersonal: string,
    redSocial1: string,
    redSocial2: string,
    doms: Domicilio[],
    edus: Educacion[],
    exp_laboral: ExperienciaLaboral[],
    proyectos: Proyecto[],
    tecnologias: Tecnologia[]
  ) {
    this.id_pers = id_pers;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.resumen = resumen;
    this.foto = foto;
    this.bannerPersonal = bannerPersonal;
    this.redSocial1 = redSocial1;
    this.redSocial2 = redSocial2;
    this.doms = doms;
    this.edus = edus;
    this.exp_laboral = exp_laboral;
    this.proyectos = proyectos;
    this.tecnologias = tecnologias;
  }
}
