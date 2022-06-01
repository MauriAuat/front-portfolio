import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  @Input() persona: Persona = {
    id_pers: 0,
    nombre: '',
    apellido: '',
    titulo: '',
    resumen: '',
    foto: '',
    bannerPersonal: '',
    redSocial1: '',
    redSocial2: '',
    doms: [],
    edus: [],
    exp_laboral: [],
    proyectos: [],
    tecnologias: [],
  };
  constructor() {}

  ngOnInit(): void {}
}
